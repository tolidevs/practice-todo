import React from 'react'
import Form from './Form'
import { useState } from 'react'
import Task from './Task'
import { FaSort } from 'react-icons/fa'

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
    // const [toDoList, setToDoList] = useState([...toDos])
    const [showForm, setShowForm] = useState(false)
    const [sorted, setSorted] = useState(false)

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
            return toDos.map((toDo) => (
                <Task
                    toDo={toDo}
                    key={toDo.id}
                    toggleComplete={toggleComplete}
                />
            ));
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    function toggleComplete(id) {
        const upDated = toDos.map( task => (task.id === id ? { ...task, complete: !task.complete } : task ))
        setToDos(upDated)
    }

    const sortAsc = (arr) => {
        // console.log(arr)
        return arr.sort((a, b) => a["deadline"] - b["deadline"]);
    }

    const sortDesc = (arr) => {
        return arr.sort((a, b) => b["deadline"] - a["deadline"]);
    };

    const sortByDeadline = () => {
        let toDoList = [...toDos]
        setSorted(() => {
            if (sorted === "desc") {
                setToDos(() => sortAsc(toDoList));
                return "asc";
            } else if (sorted === "asc") {
                setToDos(() => sortDesc(toDoList));
                return "desc";
            }
            setToDos(sortAsc(toDoList));
            return "asc"
        })
    }

    const filterOverDue = () => {
        let toDoList = [...toDos];


    }





    // --------------return---------------

    return (
        <div>
            <table>
            <thead>
                <tr>
                <th></th>
                <th>Task</th>
                <th onClick={sortByDeadline}>
                    Deadline
                    <FaSort />
                </th>
                <th>
                    <label>Overdue?</label>
                    <select name="overDueOptions" onChange={filterOverDue}>
                    <option name="overDue">All</option>
                    <option name="overDue">Overdue</option>
                    <option name="notOverDue">Not Overdue</option>
                    </select>
                </th>
                <th>Complete?</th>
                </tr>
            </thead>
            <tbody>{showTasks(toDos)}</tbody>
            </table>
            <button onClick={toggleForm}>Add To Do</button>
            {showForm && <Form addToDo={addToDo} />}
        </div>
    );
}

export default ToDoList