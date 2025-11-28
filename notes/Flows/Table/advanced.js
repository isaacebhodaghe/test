
type COLUMN = {
  field:String;
  headerName:String;
  width:String;
  colSpan:Number | ({row})=>Number;
  valueGetter: ({value,row, default:Default})=> <Default/>

  // ------updates------
  type: 'action'|'status';
  editType: 'TextField' | 'Select' | 'TextArea' | 'DatePicker';
  sortable:boolean
  // hideable:boolean
}

// type : status - table row:  status: {
    //   value: 'Progress',
    //   variant: 'progress',
    // },

type: action
    actions:['edit','delete',{id:'',label:'',icon:'',...rest},'custom-action']

const columns = [
  { 
  field: "activity",
   headerName: "Activity",
   width: 70,
   valueGetter:({row})=>{
    if(row.id === 'groupHeading'){
      return(
        <>
        <Table.categoryTitle>{row.title}</Table.categoryTitle>
       {row.subtitle && <Table.categorySubTitle>{row.subtitle}</Table.categorySubTitle>}
        </>
      )
    }
    if(row.id === "total"){
      return(
        <>
        {row.total}
        </>
      )
    }

    return undefined;
   },
   colSpan:({row})=>{
    if(row.id === 'groupHeading'){
      return 4
    }
    if(row.id === "total"){
      return 4
    }

    return undefined;
   },
 },
 {  field:"member",  headerName:'Member',  width:'70,' },
 {  field:"employer",  headerName:'Employer',  width:'70,' },
 {  field:"openingValue",  headerName:'Opening Value',  width:'70,' },

];

const singleBankingGroup = [
  {id:'groupHeading',title:'Defined Contribution Pension Plan (DCPP)', subtitle:'Subheading lorem ipsum' },
  { id: 1, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
  { id: 2, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
  { id: 3, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
  {id:'groupTotal',total:'$3,146.46' },
]

const rows = [
  ...singleBankingGroup,
  ...singleBankingGroup,
  ...singleBankingGroup,
];

export default function TableUser() {
  return (
      <Table
        rows={rows}
        columns={columns}
        // stacked
        // title
        // onPageChange((page))
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
  );
}

const Table =({})=>{
  return(
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

const columns_ = [
  {  field:"col1",  headerName:'Column 1'},
  {  field:"col2",  headerName:'Column 2'},
  {  field:"col3",  headerName:'Column 3'},
  { 
    field:"col4",
    headerName:'Actions',
    type: 'action',
    actions:{
      'edit':{id:'',label:'',icon:'',...rest},
      'delete': {id:'',label:'',icon:'',...rest},
      'save': { ... },
      'cancel': { ... },
      ... // custom action as object
      'my-custom-icon':{...}
    },
 },
];

const _rows = [
  { 
    id: 1, 
    col1: "Row 1 Col 1 Text",
    col2: "Row 1 Col 2 Text", 
    col3: 'Row 1 Col 3 Text' ,
    // col4  not required handled inside Table
  },
  {...},
  {...},
  {...},
]

