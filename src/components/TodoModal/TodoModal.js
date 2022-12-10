import React, {useEffect, useRef} from 'react'
import './TodoModal.css'


const TodoModal = ({todo, onDelete, openModal, setOpenModal}) => {

  return (
    <div onClick={() => {
      setOpenModal(false);
    }} className='modal-background'>
        <div onClick={(e) => {
          console.log(e)
          e.preventDefault()
        }} className='modal-window'>
            <h3 className='text'>Are you sure you want to delete?</h3>
            <div className='buttons'>
              <button onClick={(e) => {
                        // console.log(todo);
                        console.log(todo);
                        console.log(e);
                        onDelete(todo);
                        setOpenModal(false);
                    }
              }
                 className='btn yes'>Yes</button>
              <button className='btn no'>No</button>
            </div>
        </div>
    </div>
  )
}

export default TodoModal