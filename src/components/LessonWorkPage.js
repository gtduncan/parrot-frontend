import {Button, ProgressBar, Card, Form} from 'react-bootstrap'
import {React, useState, useCallback} from 'react'

const LessonWorkPage = ({currentStage, setCurrentStage, lessonData, setStageData, stageData, currentLesson}) => {
    const [userAnswer, setUserAnswer] = useState("")

    const handleChange = (e) => {
        console.log(userAnswer)
        setUserAnswer(e.target.value)
    }

    const handleCheck = (e) => {
        e.preventDefault()
        if(userAnswer.toLowerCase() === stageData.answer.toLowerCase())
        {
            console.log('right')
            fetch(`http://localhost:3000/lessons/${currentLesson.id}`, {
                method: 'PATCH',
                headers: {
                'Content-type':'application/json'},
                body: JSON.stringify({current_stage: currentStage+=1})
            })
            setCurrentStage((currentStage) => currentStage += 1)
            console.log('fetched')
            console.log(currentStage)
            setUserAnswer("")
        }
        else
        {
            console.log('wrong')
        }
    }

    return(
        <div className='lesson-work-page'>
            <ProgressBar id='lesson-progress' animated now={(currentStage-1)/10*100}/>
            <h2 id='lesson-header'>{currentLesson.lesson_name}</h2>
        <div className='question-container'>
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    <Card.Title>Translate the following:</Card.Title>
                    <Card.Text>{stageData.question}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Form>
            <Form.Group className="answer-field" controlId="exampleForm.ControlInput1">
              <Form.Control
                disabled={currentStage===11 ? true : false}
                name="answer"
                onChange={(e) => handleChange(e)}
                value={userAnswer}
                autoFocus/>
            </Form.Group>
            </Form>
            <Button onClick={(e) => handleCheck(e)}>Check</Button>
            </Card.Footer>
            </Card>
            </div>
        </div>
        
    )
}

export default LessonWorkPage