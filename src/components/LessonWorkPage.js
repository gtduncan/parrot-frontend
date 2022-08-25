import {ProgressBar} from 'react-bootstrap'

const lessonWorkPage = ({lessonData, currentLesson}) => {
    return(
        <div className='lesson-work-page'>
            <ProgressBar id='lesson-progress' now={currentLesson.current_stage/10*100}/>
            <h2 id='lesson-header'>{currentLesson.lesson_name}</h2>
            <div className='question-container'>

            </div>
        </div>
        
    )
}

export default lessonWorkPage