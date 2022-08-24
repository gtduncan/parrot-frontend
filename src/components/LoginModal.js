import {Button, Modal, Form} from 'react-bootstrap'
import {React, useState} from 'react'

const LoginModal = ({showLogin, handleCloseLogin}) =>
{
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
        fetch('http://localhost:3000/users', {
            mode: no-cors
        })
        .then((res)=> res.json())
        .then((data)=> console.log(data))
        setValues(defaultValues)
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
          <Button variant="primary" onClick={(e) => { handleCloseLogin(); handleSubmit(e) }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default LoginModal