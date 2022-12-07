import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import TodoHeader from './components/TodoHeader/TodoHeader'

const App = () => {

  // const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState([])
  const [isShowQuote, setIsShowQuote] = useState(true)  

  return (
    <div className='todo-app'>
      <TodoHeader todos={todos} onHideCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }}  />
      <TodoForm isShowQuote={isShowQuote} todos={todos} onAdd={(text) => {
        setIsShowQuote(false)
        setTodos([
          ...todos,
          {
            id : Math.random(),
            text,
            isCompleted : false
          }
        ])
      }} />
      <TodoList 
        todos={todos} 
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(todo.id === newTodo.id) {
              return newTodo
            }
            return todo;
          }))
        }}
        />

    </div>
  )
}

export default App
