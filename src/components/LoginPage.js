import {React, useState} from 'react'
import video from "../images/background-blue.mp4"
import earth from "../images/earth-icon.png"
import {Button, Modal, Form} from 'react-bootstrap'
import LoginModal from './LoginModal.js'
import SignupModal from './SignupModal.js'


const LoginPage = () =>
{
  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

    return(
    <div>
    <video autoPlay muted loop id="myVideo">
        <source src={video} type='video/mp4' />
    </video>
    <img id="earth-icon" src={earth}></img>
    <div id="text-container">
        <h1 id="login-text-header">Learn a new language with Parrot</h1>
        <p id="login-text-paragraph">Learning a language is proven to be the best blah blah blah Learning a language is proven to be the best blah blah blahLearning a language is proven to be the best blah blah blahLearning a language is proven to be the best blah blah blah Learning a language is proven to be the best blah blah blah Learning a language is proven to be the best blah blah blah Learning a language is proven to be the best blah blah blah</p>
        <div id="button-div">
            <Button variant='light'className="login-buttons" onClick={handleShowSignup}>Get Started</Button>
            <div className="vr" />
            <Button variant='light' className="login-buttons" onClick={handleShowLogin}>Log In</Button>
        </div>
    </div>
      <SignupModal showSignup={showSignup} handleCloseSignup={handleCloseSignup}/>
      <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin}/>
    </div>
    )
}

export default LoginPage