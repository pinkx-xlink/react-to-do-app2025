import React from 'react';

function ToDoItem(props) {
  console.log(props.task)
  return (
    <div>ToDoItem
        <p>{props.task}</p>
    </div>
  )
}

export default ToDoItem