import React from 'react'
// import TodoList from '../TodoList/TodoList';
import './TodoModal.css'


const TodoModal = ({setOpenModal, handleDeleteItem}) => {

  return (
    <div onClick={() => {
      setOpenModal(false);
    }} className='modal-background'>
        <div onClick={(e) => {
          // console.log(e)
          e.preventDefault()
        }} className='modal-window'>
            <h3 className='text'>Are you sure you want to delete?</h3>
            <div className='buttons'>
              <button 
                onClick={handleDeleteItem}
                className='btn yes'>Yes</button>
              <button onClick={(e) => {
                setOpenModal(false)
              }} className='btn no'>No</button>
            </div>
        </div>
    </div>
  )
}

export default TodoModal