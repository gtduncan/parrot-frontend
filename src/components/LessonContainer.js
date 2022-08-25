import {Container} from 'react-bootstrap'
import LessonCard from './LessonCard.js'

const LessonContainer = ({currentLesson, lessonData, setCurrentLesson}) => {
    const mappedLessons = lessonData?.map((lesson) => {
            return ( <LessonCard currentLesson={currentLesson} setCurrentLesson={setCurrentLesson} lesson={lesson}/>)
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