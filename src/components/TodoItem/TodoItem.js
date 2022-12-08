import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onChange, onDelete, openModal, setOpenModal }) => {
    return (
        <div className="todo-item">
            <label className="todo-item-label">
                <div className="left">
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={(e) => {
                            onChange({
                                ...todo,
                                isCompleted: e.target.checked,
                            });
                        }}
                    />
                    {<h4>{todo.text}</h4>}
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
