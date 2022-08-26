import {Container} from 'react-bootstrap'
import LessonCard from './LessonCard.js'

const LessonContainer = ({currentUser, currentLesson, setCurrentStage, lessonData, setCurrentLesson}) => {
    const mappedLessons = lessonData?.map((lesson) =>  { 
        if(lesson.user_id === currentUser.id) {
            return ( <LessonCard currentLesson={currentLesson} setCurrentStage={setCurrentStage} setCurrentLesson={setCurrentLesson} lesson={lesson}/>)
        }
})
    return(
        <div>
        <Container className="lessons-container" fluid="md">
            {mappedLessons}
        </Container>
        </div>
    )
}

export default LessonContainer