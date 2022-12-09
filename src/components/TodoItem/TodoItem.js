import React, { useEffect, useRef } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onChange, onDelete, openModal, setOpenModal }) => {

    const todoRef = useRef()

    useEffect(() => {
        if(todo.isCompleted) {
            todoRef.current.style.color = "#ACACAC"
        } else {
            todoRef.current.style.color = "#666666"
        }
    }, [todo])
    return (
        <div className="todo-item">
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
                    {<h4 ref={todoRef} className="todo-text">{todo.text}</h4>}
                </div>
                <button
                    onClick={() => {
                        setOpenModal(true);
                        console.log(openModal);
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
