import {Button, Modal, Form} from 'react-bootstrap'
import {React, useState} from 'react'
import {useNavigate} from "react-router-dom";

const LoginModal = ({showLogin, handleCloseLogin, loginInfo, currentUser, setLoggedIn, setCurrentUser}) =>
{
    let navigate = useNavigate()

    const defaultValues = {
        email: '',
        password: ''
    }
    const [values, setValues] = useState(defaultValues)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
      }    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        for(const user of loginInfo) {
            if(user.email === values.email && user.password === values.password) {
                setLoggedIn(true)  
                setCurrentUser(user)
                handleCloseLogin();
                navigate('/lessons')
                setValues(defaultValues)
                return 0;
            }
        }
        alert('No user found')
      }

    return(
    <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                value={values.email}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={values.password}
                onChange={(e) => handleChange(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => {handleSubmit(e) }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default LoginModal