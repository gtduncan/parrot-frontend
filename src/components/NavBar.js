import {Nav, Button, Navbar, Container} from 'react-bootstrap'
import logo from "../images/parrotlogo.png"
import coin from "../images/dollar.png"
import LoginModal from "./LoginModal"
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";

const NavBar = ({showLogin, currentUser, setCurrentUser, handleCloseLogin, setLoggedIn, loginInfo, loggedIn, logout, handleShowLogin}) => 
{
    const buttonOrName = () => 
    {
        console.log('logged in' ,loggedIn)

        if(loggedIn)
        {
            return <div id='logout-display'>
                <div id='points-display'>
                <img id='coin-display' src={coin}></img>
                <p >{currentUser.points}</p>
                </div>
                <p id='user-display'>{currentUser.username}</p>
                <Button id="nav-login" onClick={logout} variant='light'>Log Out</Button>
                </div>
        }
        else
        {
            return <Button id="nav-login" onClick={handleShowLogin} variant='light'>Log In</Button>
        }
    }
    return(
    <Navbar id="nav-container" variant='dark'>
        <Container>
        {loggedIn ? <Link to="/lessons"><Navbar.Brand id='nav-logo'>Parrot</Navbar.Brand></Link> : <Link to="/"><Navbar.Brand id='nav-logo'>Parrot</Navbar.Brand></Link>}
            <Nav className="ms-auto">
        {buttonOrName()}
                        </Nav>   
                    </Container>
                    <LoginModal showLogin={showLogin} loggedIn={loggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} handleCloseLogin={handleCloseLogin} loginInfo={loginInfo}/>
                </Navbar>
    
        
    )
}

export default NavBar