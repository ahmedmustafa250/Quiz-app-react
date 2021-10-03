import { Form, Row, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Radio from "../Rarecomponents/Radio";
import Date from "../Rarecomponents/Date";
import "./signup.css";
import {useHistory,Link} from "react-router-dom";

export default function Signup() {
  let history=useHistory()
  function checking(){
        let firstName=document.getElementById("firstName").value
        let lastName=document.getElementById("lastName").value
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value

        if(!firstName && !lastName && !email && !password){
            alert("Please Fill Form ")
        }
        else{
              if(firstName && lastName && email && password){
                    // console.log(firstName,lastName,email,password)
                      let userdata={
                        'firstname':firstName,
                        'lastName':lastName,
                        'email':email,
                        'password':password,
                    }
                    localStorage.setItem("user",JSON.stringify(userdata))
                    // console.log("history is => ",history)
                    history.push("/") 
              }
              else if(!firstName){
                  alert("Firstname Field Missing !")
              }
              else if(!lastName){
                  alert("Lastname Field Missing !")
              }
              else if(!email){
                  alert("Email Field Missing !")
              }
              else if(!password){
                  alert("Password Field Missing !")
              }
              else{
                alert("Field missing")
              }

        }
       
  }
  return (
    <div className="Form">
      <h1 className="signup-heading">Create an Acccount</h1>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First</Form.Label>
          <Form.Control type="email" placeholder="First name"   id="firstName"/>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last name" id="lastName" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="abc123@test.com" id="email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" type="password" id="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Radio />
      </Form.Group>
      <Form.Group className="mb-3">
        <Date />
      </Form.Group>
      <div className="create-account-btn">
        <Button variant="primary" className="signup" onClick={checking}>
          Create an account
        </Button>
      <Link to="/" className="goback">Go to back</Link>
      </div>
    </div>
  );
}
