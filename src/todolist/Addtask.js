import { useState } from "react"

const Addtask = ({ onAdd }) => {
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [completed, setCompleted] = useState(false)
const [category, setCategory] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!text) {
        alert('add task please')
        return
    }
    onAdd({text, category, day, completed})

    setText('')
    setDay('')
    setCompleted(false)
    setCategory('')
}

    return (
        <div className="form-containter">
        <form className="add-task" onSubmit={onSubmit}>
            <div className="form">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
           
            <div className="form-cat">
                <label>Category</label>
                <select defaultValue={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="home">HOME</option>
                    <option value="work">WORK</option>
                    <option value="random">OTHER</option>
                </select>
            </div>

            <div className="form-date">
                <label>Due Day</label>
                <input className="date-input" type="date" placeholder="Add Day and Time" value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>

            <div className="form-checkbox">
                <label>Set Completed</label>
                <input type="checkbox" checked={completed} value={completed} onChange={(e)=> setCompleted(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save" className="button_save" />
        </form>
    </div>
    )
}

export default Addtask
