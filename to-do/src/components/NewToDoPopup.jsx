import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ToDoItem from './ToDoItem';

const handleSubmit = () => {
    console.log('ksdnkjn')
    return (
      <ToDoItem />
    )
  }
  
const NewToDoPopup = () => {
  
  return (
    <div>NewToDoPopup
         <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                 <form id="myForm">
                    <label for="task">Task:</label>
                    <input type="text" id="task" name="task" placeholder="Enter the task" required />
                    <br/>
                    <label for="project">Project:</label>
                    <input type="text" id="project" name="project" placeholder="MAKE THIS A DROPDOWN" required />
                    <br/>
                    <label for="recurring">Recurring:</label>
                    <input type="text" id="recurring" name="recurring" placeholder='Set recurrance frequency-daily, weekly, etc' require />
                    <br/>
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" placeholder="Enter the due date" required />
                    <br/>
                    <button type="button" id="submitButton" onSubmit={handleSubmit}>Submit</button>
                </form>
            </Popup>
    </div>
  )
}

export default NewToDoPopup