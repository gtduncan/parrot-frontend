import LessonContainer from './LessonContainer.js'

const LessonPage = ({currentUser, currentLesson, setCurrentStage, lessonData, setCurrentLesson}) => {
    return(
        <div id='lesson-page-div'>
            <h3 id="language-title">Spanish</h3>
            <LessonContainer currentUser={currentUser} currentLesson={currentLesson} setCurrentStage={setCurrentStage} setCurrentLesson={setCurrentLesson} lessonData={lessonData}/>
        </div>
    )
}

export default LessonPage