import { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Addtask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [completed, setCompleted] = useState(false)
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('add task please')
            return
        }
        onAdd({ text, category, day, completed })

        setText('')
        setDay('')
        setCompleted(false)
        setCategory('')
    }

    return (
        <div className="form-containter">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Add task..." value={text} onChange={(e) => setText(e.target.value)} />
                </Form.Group>

                <Form.Select className="mb-3" onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                    <option>Choose category</option>
                    <option value="HOME">HOME</option>
                    <option value="WORK">WORK</option>
                    <option value="RANDOM">OTHER</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Due day</Form.Label>
                    <Form.Control type="date" value={day} onChange={(e) => setDay(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}

export default Addtask

