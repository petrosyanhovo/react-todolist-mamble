import React from 'react'
import './TodoModal.css'

const TodoModal = () => {
  return (
    <div className='modal-background'>
        <div className='modal-window'>
            <h3 className='text'>Are you sure you want to delete?</h3>
            <div className='buttons'>
              <button className='btn yes'>Yes</button>
              <button className='btn no'>No</button>
            </div>
        </div>
    </div>
  )
}

export default TodoModal