import { Form, Button } from "react-bootstrap";
import {Link,useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import Quiz from '../Quiz/Quiz'


export default function Login() {

  let history=useHistory()
  function move(){
    let email=document.getElementById("loginEmail").value
    let password=document.getElementById("loginPassword").value 

    if(!email || !password){
        alert("Field Empty ")
    }
    else{
      try{
          let data=JSON.parse(localStorage.getItem("user"))
          if(data.email===email && data.password===password){
            localStorage.setItem("currentUser",data.firstname+" "+data.lastName)
            history.push('/Quiz')
          }
          else if(data.email!==email){
            alert("Incorrect Email")
          }
          else if(data.password!==password){
            alert("Incorrect Password")
          }
          else{
            alert("Incoorect Email and password")
          }
        }
        catch(er){
          alert("No Record Found! ")
        }
    }
    
    
    }

  return (
    <div className="Login-form">
      <h1 className="login-head">Login</h1>
      <Form.Group className="mb-3" >
        <Form.Label className="email">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="loginEmail" />
        <Form.Text className="text-muted hello">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label  className="password">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="loginPassword" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Link to="/Signup">Create an account ?</Link>
      </Form.Group>
      <div className='login-btn'>
          <Button variant="primary"  className="btn" onClick={move}>
            Submit
          </Button>
      </div>
  
    </div>
  );
}
