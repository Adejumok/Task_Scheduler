import React from 'react'
import {FaTimes} from 'react-icons/fa'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='todo'>
      <h3 >{todo.title}
      <FaTimes style={{float: 'right', cursor: 'pointer'}} 
      onClick={() => onDelete(todo.id)}/></h3>
      <p>{todo.date}</p>
    </div>
  )
}

export default TodoItem