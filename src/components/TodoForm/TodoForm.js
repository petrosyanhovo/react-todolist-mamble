import React, { useState, useRef, useEffect } from "react";
// import TodoList from "../TodoList/TodoList";
import TodoQuote from "../TodoQuote/TodoQuote";
import "./TodoForm.css";
const TodoForm = ({ onAdd, todos, isShowQuote }) => {
    const [text, setText] = useState("");
    const [textLength, setTextLength] = useState(1);
    const [showError, setShowError] = useState(false);

    const clearTextRef = useRef();

    useEffect(() => {
        if (text.length === 54) {
            console.log("Length is 54")
            setShowError(true)
        } else if (text.length < 54) {
            setShowError(false)
        }
    }, [textLength])

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
                            e.preventDefault();
                            setTextLength(1)
                            clearTextRef.current.style.display = "block";
                        }}
                        placeholder="Write here"
                        maxLength={54}
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setTextLength(textLength + 1);
                            setText(e.target.value);
                            // console.log(textLength);
                            // if (textLength >= 54) {
                            //     setTextLength(1)
                            //     setShowError(true);
                            // } else if (textLength < 54) {
                            //     setShowError(false)
                            // }
                            // setTextLength(1)
                        }}
                        className="todo-input"
                    />
                    {
                        showError && <div className="error">Task content can contain max 54 characters.</div>
                    }
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
                        console.log("clicked");
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
