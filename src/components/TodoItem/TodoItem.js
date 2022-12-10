import React, { useEffect, useRef } from "react";
import "./TodoItem.css";

const TodoItem = ({
    todo,
    onChange,
    handleClickDelete
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
                    onClick={() => handleClickDelete(todo.id)}
                    className="delBtn"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </label>
        </div>
    );
};

export default TodoItem;
