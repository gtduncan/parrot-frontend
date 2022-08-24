import {Button, Modal, Form} from 'react-bootstrap'

const SignupModal = ({showSignup, handleCloseSignup}) => {
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSignup} disabled>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default SignupModal