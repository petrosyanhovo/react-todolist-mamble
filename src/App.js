import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import TodoHeader from './components/TodoHeader/TodoHeader'

const App = () => {

  // const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState([])
  const [isShowQuote, setIsShowQuote] = useState(true)  
  const [isShowCheckbox, setIsShowCheckBox] = useState(false)
  const [completed, setCompleted] = useState([])

  
  if (isShowQuote === false && todos.length === 0) {
    setIsShowQuote(true)
  }
  return (
    <div className='todo-app'>
      {
        isShowCheckbox ? <TodoHeader
          todos={todos} 
          onHideCompleted={(e) => {
            if(e.target.checked) {
            setCompleted(todos.filter((todo) => todo.isCompleted))
            setTodos(todos.filter((todo) => !todo.isCompleted))
            } else {
              setTodos([
                ...todos,
                ...completed,
              ])
            }
      }}  /> : null
      }
      <TodoForm 
        isShowQuote={isShowQuote} 
        todos={todos}
        onAdd={(text) => {
          setIsShowQuote(false)
          setIsShowCheckBox(true)
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
