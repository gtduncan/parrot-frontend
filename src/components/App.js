import {React, useState} from 'react'
import '../App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import LoginPage from './LoginPage.js'
import NavBar from './NavBar.js'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
    <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}>
          </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
