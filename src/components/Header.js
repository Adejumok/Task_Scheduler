import React from 'react'

const Header = ({onAddModal, showNew}) => {
  return (
    <>
    <h1 className='header'>Task Sheduler</h1>
    <button className='btn-1' onClick={() => onAddModal((prevState) => !prevState)}>{showNew ? "Close" : "Open"}</button>
    </>
  )
}

export default Header