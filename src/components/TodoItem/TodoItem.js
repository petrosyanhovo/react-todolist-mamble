import React, { useEffect, useRef } from "react";
import "./TodoItem.css";
import TodoModal from "../TodoModal/TodoModal";

const TodoItem = ({
    setTodos,
    todos,
    todo,
    onChange,
    onDelete,
    openModal,
    setOpenModal,
}) => {
    const todoTextRef = useRef();
    const todoItemRef = useRef();

    useEffect(() => {
        if (todo.isCompleted) {
            todoTextRef.current.style.color = "#ACACAC";
        } else {
            todoTextRef.current.style.color = "#666666";
        }
    }, [todo]);
    return (
        <div ref={todoItemRef} className="todo-item">
            {openModal && (
                <TodoModal
                    todo={todo}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    todos={todos}
                    onDelete={(todo) => {
                        console.log("this is todo - " + todo)
                        setTodos(todos.filter((t) => t.id !== todo.id))
                    }}
                    // onDelete={onDelete}
                />
            )}
            <label className="todo-item-label">
                <div className="left">
                    <input
                        className="item-input"
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={(e) => {
                            onChange({
                                ...todo,
                                isCompleted: e.target.checked,
                            });
                        }}
                    />
                    {
                        <h4 ref={todoTextRef} className="todo-text">
                            {todo.text}
                        </h4>
                    }
                </div>
                <button
                    onClick={() => {
                        setOpenModal(true);
                        // console.log(openModal);
                        // onDelete(todo);
                    }}
                    className="delBtn"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </label>
        </div>
    );
};

export default TodoItem;
