import React, { useState } from 'react'

const NewTodo = ({onAdd}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const onSubmit=(e)=>{
    e.preventDefault()

    if(!title){
      alert("Kindly add a task")
      return
    }

    onAdd({title, date})

    setTitle('')
    setDate('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
      <label>Task</label>
      <input
      type='text' 
      placeholder='Add Task'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
      <label>Date</label>
      <input 
      type='date'
      value={date}
      onChange={(e)=>setDate(e.target.value)}/>
      </div>
      <button className='btn-1'>Submit</button>
    </form>
  )
}

export default NewTodo