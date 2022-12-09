import React, {useEffect, useRef} from 'react'
import todoItemRef from '../TodoItem/TodoItem'
import './TodoModal.css'


const TodoModal = ({todo, onDelete, openModal, setOpenModal}) => {

  const importedTodoItemRef = useRef(todoItemRef)

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
              <button onClick={(e) => {
                        // console.log(e + "TODO")
                        // console.log(e.target)
                        // console.log(openModal);
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