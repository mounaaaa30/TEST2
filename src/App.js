import "./App.css";
import { Form , Button } from "react-bootstrap";
function App() {
  return (
    <div className="APP">
     <Form id="all" >
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label  >Email address</Form.Label>
   
    <Form.Control id="info" type="email" placeholder="Enter email" />
    
    
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control id="info" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check id="infooo" type="checkbox" label="Check me out" />
  </Form.Group>
  <Button id="infoo" variant="primary" type="submit"> Submit</Button>
</Form>
    </div>
  );
}

export default App;
