import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

let nextId = 0;

const NewToDoPopup = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
         <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Add new to-do </button>}
                position="right center">
                 <form id="myForm">
                    <label for="task">Task:</label>
                    <input 
                    type="text" 
                    id="task" 
                    name="task" 
                    placeholder="Enter the task" 
                    required 
                    onChange={e => setTask(e.target.value)}
                    />
                    <br/>
                    <label for="project">Project:</label>
                    <input type="text" id="project" name="project" placeholder="MAKE THIS A DROPDOWN" required />
                    <br/>
                    <label for="recurring">Recurring:</label>
                    <input type="text" id="recurring" name="recurring" placeholder='Set recurrance frequency-daily, weekly, etc' require />
                    <br/>
                    <label 
                    for="dueDate">Due Date:</label>
                    <input 
                    type="date" 
                    id="dueDate" 
                    name="dueDate" 
                    placeholder="Enter the due date" 
                    required 
                    onChange={e => setDueDate(e.target.value)}
                    />
                    <br/>
                    <button 
                    type="button" 
                    id="submitButton" 
                    onClick={() => {
                        setTodos([
                            ...todos,
                            { id: nextId++, task: task, dueDate: dueDate }
                        ]);
                    }}>Submit</button>
                </form>
            </Popup>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.task}
                        <br/>
                        {todo.dueDate}
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default NewToDoPopup