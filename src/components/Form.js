import React from 'react';

const Form = ({addToDo}) => {

    return (
      <form onSubmit={addToDo}>
        <label>
             Task:
        <input
            name="task"
            type="text"
            placeholder="Add your task here"
            required
        />
        </label>
        <label>
            Deadline:
        <input
            type="date"
            name="deadline"
            required
        />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Form