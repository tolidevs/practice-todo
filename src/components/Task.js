import React from 'react';


const overDueStyle = {
  backgroundColor: "rgb(247, 176, 188",
  fontWeight: "bold",
  color: "rgb(186, 22, 22)"
};

const outStandingStyle = {
  backgroundColor: "rgb(250, 250, 170)",
  fontWeight: "bold",
  color: "rgb(209, 132, 0)",
};

const completeStyle = {
  backgroundColor: "rgb(216, 247, 215)",
  fontWeight: "bold",
  color: "rgb(16, 94, 54)",
};

const Task = ({ toDo, toggleComplete }) => {

    const checkOverDue = (deadline) => {
        return deadline < new Date() 
    }

    // const setStyle = () => {
    // switch (toDo) {
    //     case toDo.complete: {
    //         return completeStyle;
    //     }
    //     case checkOverDue(toDo.deadline): {
    //         return overDueStyle;
    //     }
    //     default: {
    //     return outStandingStyle;
    //     }
    // }
    // };

    const setStyle = () => {
        if (toDo.complete) return completeStyle
        if (checkOverDue(toDo.deadline)) return overDueStyle
        return outStandingStyle;
    }

    const { id, task, deadline, complete } = toDo
    
    return (
      <tr style={setStyle()}>
        <td>
          <input
            type="checkbox"
            defaultChecked={complete}
            onChange={() => toggleComplete(id)}
          />
        </td>
        <td>{task}</td>
        <td>{deadline.toDateString()}</td>
        <td>{checkOverDue(deadline) ? "Yes" : "No"}</td>
        <td>{complete ? "Yes" : "No"}</td>
      </tr>
    );
}

export default Task