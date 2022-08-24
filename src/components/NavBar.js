import {Nav, Button, Navbar, Container} from 'react-bootstrap'
import logo from "../images/parrotlogo.png"

const NavBar = () => 
{
    return(
    <Navbar id="nav-container" variant='dark'>
        <Container>
        <Navbar.Brand id='nav-logo'>
                        Parrot
                        </Navbar.Brand>
            <Nav className="ms-auto">
        <Button id="nav-login" variant='light'>Log In</Button>
                        </Nav>   
                    </Container>
                </Navbar>
        
    )
}

export default NavBar