import React from 'react'
import Form from './Form'
import { useState } from 'react'
import Task from './Task'

let currID = 5;

const ToDoList = () => {

    const [toDos, setToDos] = useState([
            {
                id: 1,
                task: "Wash Mabel",
                deadline: new Date("Tue Jun 02 2020 01:00:00 GMT+0100 (British Summer Time)"),
                complete: false,
            },
            {
                id: 2,
                task: "Mow Lawn",
                deadline: new Date("Tue Jun 09 2020 01:00:00 GMT+0100 (British Summer Time)"),
                complete: false,
            }
        ])
    const [showForm, setShowForm] = useState(false)

    const addToDo = (e) => {
        e.preventDefault()
        let task = e.target.task.value
        let deadline = e.target.deadline.value

        currID++

        setToDos([...toDos, {
            id: currID,
            task,
            deadline: new Date(deadline),
            complete: false
        }])

        e.target.reset()
    }

    const showTasks = (toDos) => {
            return toDos.map( toDo => (<Task toDo={toDo} key={toDo.id} />))
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    function toggleComplete(id) {
        const upDated = toDos.map( task => (task.id === id ? { ...task, complete: !task.complete } : task ))
        console.log(upDated)
        setToDos(upDated)
    }

    return (
      <>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Task</th>
              <th>Deadline</th>
              <th>Overdue?</th>
              <th>Complete?</th>
            </tr>
          </thead>
          <tbody>{showTasks(toDos)}</tbody>
        </table>
        <button onClick={toggleForm}>Add To Do</button>
        {showForm && <Form addToDo={addToDo} toggleComplete={toggleComplete} />}
      </>
    );
}

export default ToDoList