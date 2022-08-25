import {Card, ProgressBar} from 'react-bootstrap'
import es_flag from '../images/spain.png';
import {useNavigate} from "react-router-dom";


const LessonCard = ({currentLesson, setCurrentLesson, lesson}) => 
{
    let navigate = useNavigate();

    const flag = () => {
        if(lesson.language === "es")
        {
            return es_flag
        }
    }

    const handleClick = () => {
        setCurrentLesson(lesson)
        navigate(`/lessons/${lesson.id}`)
    }

    return (
        <Card className='lesson-card' onClick={handleClick} style={{ width: '18rem' }}>
          <Card.Body>
            <div className='card-title'>
            <Card.Title>{lesson.lesson_name}</Card.Title>
            <img className='card-flag' src={flag()}/>
            </div>
            <Card.Subtitle className="mb-2 text-muted">{`Lesson ${lesson.id}`}</Card.Subtitle>
            <Card.Text>
              {lesson.lesson_description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ProgressBar now={lesson.current_stage/10*100} label={`${lesson.current_stage} / 10`}/>
          </Card.Footer>
        </Card>
      );
    
}

export default LessonCard