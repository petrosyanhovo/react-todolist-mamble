import React, {useEffect, useRef} from 'react'
import './TodoModal.css'


const TodoModal = ({setOpenModal, handleDeleteItem}) => {

  const modalRef = useRef()

  useEffect(() => {
    document.body.addEventListener("mousedown", (e) => {
        if (!modalRef.current.contains(e.target)) {
          setOpenModal(false);
        };
    });
  });

  return (
    <div className='modal-background'>
        <div ref={modalRef} className='modal-window'>
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