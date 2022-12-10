import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoModal from "./components/TodoModal/TodoModal";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [isShowQuote, setIsShowQuote] = useState(true);
    const [isShowCheckbox, setIsShowCheckBox] = useState(false);
    const [completed, setCompleted] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [deleteId, setDeleteId] = useState();

    const handleDeleteItem = () => {
        setTodos((todo) => {
            const newTodos = [...todo];
            return newTodos.filter((item) => item.id !== deleteId);
        });
        setOpenModal(false);
    };

    const handleClickDelete = (id) => {
        setDeleteId(id);
        setOpenModal(true);
        console.log(id);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        if (todos.length !== 0) {
            setIsShowQuote(false);
            setIsShowCheckBox(true);
        }
        console.log(todos);
        if (isShowQuote === false && todos.length === 0) {
            setIsShowQuote(true);
        }
    }, [todos, isShowQuote]);

    return (
        <div className="todo-app">
            {openModal && (
                <TodoModal
                    handleDeleteItem={handleDeleteItem}
                    setOpenModal={setOpenModal}
                />
            )}
            {isShowCheckbox && (
                <TodoHeader
                    todos={todos}
                    onHideCompleted={(e) => {
                        if (e.target.checked) {
                            setCompleted(
                                todos.filter((todo) => todo.isCompleted)
                            );
                            setTodos(todos.filter((todo) => !todo.isCompleted));
                        } else {
                            setTodos([...completed, ...todos]);
                        }
                    }}
                />
            )}
            <TodoForm
                isShowQuote={isShowQuote}
                onAdd={(text) => {
                    if (text !== "") {
                        setIsShowQuote(false);
                        setIsShowCheckBox(true);
                        setTodos([
                            {
                                id: Math.random(),
                                text,
                                isCompleted: false,
                            },
                            ...todos,
                        ]);
                    }
                }}
            />
            <TodoList
                handleClickDelete={handleClickDelete}
                // setTodos={setTodos}
                // openModal={openModal}
                // setOpenModal={setOpenModal}
                todos={todos}
                onChange={(newTodo) => {
                    setTodos(
                        todos.map((todo) => {
                            if (todo.id === newTodo.id) {
                                return newTodo;
                            }
                            return todo;
                        })
                    );
                }}
            />
        </div>
    );
};

export default App;
