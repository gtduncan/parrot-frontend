import {React, useState, useEffect} from 'react'
import '../App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import LoginPage from './LoginPage.js'
import NavBar from './NavBar.js'
import LessonPage from './LessonPage.js'
import LessonWorkPage from './LessonWorkPage.js'
import {useNavigate} from "react-router-dom";


function App() {

  let navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)
  const [loginInfo, setLoginInfo] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [currentLesson, setCurrentLesson] = useState({})
  const [lessonData, setLessonData] = useState([])
  const [stageData, setStageData] = useState([])
  const [currentStage, setCurrentStage] = useState(1)

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then((res)=> res.json())
    .then((data)=> {console.log(data); setLoginInfo(data)})

    fetch('http://localhost:3000/lessons')
    .then((res)=> res.json())
    .then((data)=> {console.log(data); setLessonData(data)})

    fetch(`http://localhost:3000/stages/${currentStage}`)
    .then((res)=> res.json())
    .then((data)=> {console.log(data); setStageData(data)})
  }, [loggedIn, currentLesson, currentStage]);

  

  const logout = () => 
  {
    setLoggedIn(!loggedIn)
    setCurrentUser([])
    navigate('/')
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} showLogin={showLogin} handleShowLogin={handleShowLogin} logout={logout} loginInfo={loginInfo} loggedIn={loggedIn}/>
        <Routes>
          <Route exact path="/" element={<LoginPage currentUser={currentUser} handleCloseLogin={handleCloseLogin} setShowLogin={setShowLogin} handleShowLogin={handleShowLogin} setCurrentUser={setCurrentUser} loggedIn={loggedIn} showLogin={showLogin}loginInfo={loginInfo} setLoggedIn={setLoggedIn}/>}>
          </Route>
          <Route exact path="/lessons" element={<LessonPage currentUser={currentUser} lessonData={lessonData} setCurrentStage={setCurrentStage} currentLesson={currentLesson} setCurrentLesson={setCurrentLesson}/>}>
          </Route>
          <Route exact path={`/lessons/${currentLesson.id}`} element={<LessonWorkPage currentStage={currentStage} setCurrentLesson={setCurrentLesson} setCurrentStage={setCurrentStage} stageData={stageData} currentLesson={currentLesson} setStageData={setStageData}/>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
