import React from 'react';

const Task = ({ toDo, toggleComplete }) => {
    
    const checkOverDue = (deadline) => {
        return deadline < new Date() ? "Yes" : "No"
    }

    const { id, task, deadline, complete } = toDo
    
    return (
        <tr>
            <td><input type="checkbox" defaultChecked={complete} onChange={() => toggleComplete(id)} /></td>
            <td>{task}</td>
            <td>{deadline.toDateString()}</td>
            <td>{checkOverDue(deadline)}</td>
            <td>{complete ? "Yes" : "No"}</td>
        </tr>
    )
}

export default Task