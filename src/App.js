import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import TodoHeader from './components/TodoHeader/TodoHeader'

const App = () => {

  // const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  const [isShowQuote, setIsShowQuote] = useState(true)  
  const [isShowCheckbox, setIsShowCheckBox] = useState(false)
  const [completed, setCompleted] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if(todos.length !== 0) {
       setIsShowQuote(false)
       setIsShowCheckBox(true)
      }
    console.log(todos)
    if (isShowQuote === false && todos.length === 0) {
      setIsShowQuote(true)
    }
  }, [todos, isShowQuote]);
  
  
  return (
    <div className='todo-app'>
      {/* {
      openModal && <TodoModal openModal={openModal} setOpenModal={setOpenModal} todos={todos} onDelete={(todo) => {
        console.log("this is todo - " + todo)
        setTodos(todos.filter((t) => t.id !== todo.id))
      }}/>
        } */}
      {
        isShowCheckbox && <TodoHeader
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
      }}  /> 
      }
      <TodoForm 
        isShowQuote={isShowQuote} 
        todos={todos}
        onAdd={(text) => {
          if(text !== "") {
          setIsShowQuote(false)
          setIsShowCheckBox(true)
          setTodos([
            {
              id : Math.random(),
              text,
              isCompleted : false
            },
            ...todos
          ])
         } 
      }} />
      <TodoList 
        setTodos={setTodos}
        openModal={openModal}
        setOpenModal={setOpenModal}
        todos={todos} 
        onDelete={(todo) => {
          // console.log(todo)
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
