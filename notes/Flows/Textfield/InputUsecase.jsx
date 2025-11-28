import Button from './bootstrap/index.js'

const Input = ({
    labelProps:{},
    controlProps:{}
}) =>(
     <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        {...labelProps}
      >
        <Form.Control 
            type="email" a
            placeholder="name@example.com" 
            {...controlProps}
        />
      </FloatingLabel>

)




const SampleUser = () => {
  const ref = useRef();

  return(
    <>
    <Input
        labelProps={{
          
        }}
        controlProps={{
          ref,
        }}
      />
      <Button>
            Hello world
      </Button>
      </>
  )
}


const Button =({label, variant, focus, active})=>{
  
  return(
  <Bootstrap.Button
    label={label} 
    variant={variant} 
    focus={focus} 
    active={active}  
    >
    Hello world
  <Bootstrap.Button/>
)}