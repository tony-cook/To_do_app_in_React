import React, {useState} from 'react'

function Taskfield({addTaskToArray}) {
    const [task, setTask] = useState('')

    const changeTask = (e) => setTask(e.target.value)

    const submitTask = (e) => {
        e.preventDefault()

        addTaskToArray(task)
        setTask('')
    }

    return (
        <div>
            <form onSubmit={submitTask} className="form-control">
                <label>Add a task:</label>
                <input value={task} onChange={changeTask} />
                <button className="btn btn-block">Save Task</button>
            </form>
        </div>
    )
}

export default Taskfield
