import LessonContainer from './LessonContainer.js'

const LessonPage = ({currentLesson, lessonData, setCurrentLesson}) => {
    return(
        <div id='lesson-page-div'>
            <h3 id="language-title">Spanish</h3>
            <LessonContainer currentLesson={currentLesson} setCurrentLesson={setCurrentLesson} lessonData={lessonData}/>
        </div>
    )
}

export default LessonPage