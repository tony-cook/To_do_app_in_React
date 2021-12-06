import React from 'react'

function TaskList({tasksArray, deleteTaskFromArray}) {
    tasksArray.map((task, index) =>
        console.log(index, task)
    )

    return (
        <div>
            {tasksArray.map((task,index) => (
                <h3 className="task">
                    {index+1}. {task}
                    <button onClick={() => deleteTaskFromArray(task)} className="delete-icon">x</button>
                </h3>
            ))}
        </div>
    )
}

export default TaskList
