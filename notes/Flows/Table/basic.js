
type COLUMN = {
  field:String;
  title:String;
  width:String;
  colSpan:Number | ({row})=>Number;
  valueGetter: ({value,row})=> anything
  align:'left'|'right'|'center'
  // type:Number| String | node;
  // sortable:boolean
  // hideable:boolean
}

const columns = [
  {   field: "activity",   title: "Activity",   width: 70, },
  {  field:"member",  title:'Member',  width:'70,' },
  {  field:"employer",  title:'Employer',  width:'70,' },
  {  field:"openingValue",  title:'Opening Value',  width:'70,' },

];

const rows = [
  { id: 1, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
  { id: 2, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
  { id: 3, activity: "Openingvalue", member: "$543534", employer: '$12423' ,openingValue:'$300' },
]


export default function TableUser() {
  return (
      <Table
        rows={rows}
        columns={columns}
        // pagination
        // rowPage
        // pages
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
