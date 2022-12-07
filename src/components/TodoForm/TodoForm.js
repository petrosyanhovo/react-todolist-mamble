import React, { useState, useRef } from "react";
import TodoList from "../TodoList/TodoList";
import TodoQuote from "../TodoQuote/TodoQuote";
import "./TodoForm.css";
const TodoForm = ({ onAdd, todos, isShowQuote }) => {
    const [text, setText] = useState("");
    const clearTextRef = useRef();
    return (
        <div className="TodoForm">
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
                        }}
                        className="clearText"
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <button className="addBtn">Add</button>
            </form>
            {isShowQuote ? <TodoQuote /> : null}
        </div>
    );
};

export default TodoForm;
