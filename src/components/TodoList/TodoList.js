import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({todos, onDelete, onChange}) => {
  return (
    <div className='todo-list'>
        {
          todos.map((todo) => {
            return (
              <TodoItem 
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