import {Button, Modal, Form} from 'react-bootstrap'
import {React, useState} from 'react'
import {useNavigate} from "react-router-dom";

const SignupModal = ({setCurrentUser, showSignup, handleCloseSignup, loginInfo, setLoggedIn}) => {
    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        points: 0
    }

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let exists = false;
        console.log(values)
        for(const user of loginInfo) {
            if(user.email === values.email || user.username === values.username) {
                alert('User already exists. Try again.');
                exists = true;
            }
        }
        if(values.password !== values.confirmPassword) {
            alert("Passwords don't match. Try again")
        }
        if(exists === false && values.password === values.confirmPassword) {
            delete values.confirmPassword
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                'Content-type':'application/json'},
                body: JSON.stringify(values)
            })
            .then((res)=> res.json())
            .then((data)=> {console.log(data); setCurrentUser(data)});
            setValues(defaultValues)
            handleCloseSignup()
            navigate('/lessons')
            setLoggedIn(true)
        }
      }

    const [values, setValues] = useState(defaultValues)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
      }   

    return(
    <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                name="username"
                onChange={(e)=> handleChange(e)}
                value={values.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={(e)=> handleChange(e)} 
                value={values.email} 
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={(e)=> handleChange(e)}
              value={values.password} type="password"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={(e)=> handleChange(e)} value={values.confirmPassword} name="confirmPassword" type="password"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default SignupModal