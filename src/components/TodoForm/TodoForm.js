import React, { useState, useRef } from "react";
// import TodoList from "../TodoList/TodoList";
import TodoQuote from "../TodoQuote/TodoQuote";
import "./TodoForm.css";
const TodoForm = ({ onAdd, todos, isShowQuote }) => {
    const [text, setText] = useState("");
    const clearTextRef = useRef();
    return (
        <div className="todo-form">
            <h2 className="header">Task</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onAdd(text);
                    setText("");
                }}
            >
                <div className="forInput">
                    <input
                        onClick={(e) => {
                            // e.preventDefault();
                            clearTextRef.current.style.display = "block";
                        }}
                        placeholder="Write here"
                        maxLength={54}
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        className="todo-input"
                    />
                    <button
                        ref={clearTextRef}
                        onClick={(e) => {
                            e.preventDefault();
                            setText("");
                            clearTextRef.current.style.display = "none";
                        }}
                        className="clearText"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <button
                    className="addBtn"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        onAdd(text);
                        setText("");
                    }}
                >
                    Add
                </button>
            </form>
            {isShowQuote ? <TodoQuote /> : null}
        </div>
    );
};

export default TodoForm;
