import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({setTodos,todos, onDelete, onChange, openModal, setOpenModal}) => {
  return (
    <div className='todo-list'>
        {
          todos.map((todo) => {
            return (
              <TodoItem 
                setTodos={setTodos}
                todos={todos}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={todo.id} 
                todo = {todo}
                onChange = {onChange}  
                onDelete = {onDelete}
              />
            )
          })
        }
    </div>
  )
}

export default TodoList