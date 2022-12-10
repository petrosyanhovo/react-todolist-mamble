import React, { useState, useRef, useEffect } from "react";
// import TodoList from "../TodoList/TodoList";
import TodoQuote from "../TodoQuote/TodoQuote";
import "./TodoForm.css";
const TodoForm = ({ onAdd, todos, isShowQuote }) => {
    const [text, setText] = useState("");
    // const [textLength, setTextLength] = useState(1);
    const [showError, setShowError] = useState(false);

    const clearTextRef = useRef();
    const inputRef = useRef();
    const errorRef = useRef();

    useEffect(() => {
        if (text.length === 54) {
            console.log("Length is 54");
            setShowError(true);
            inputRef.current.style.borderColor = "#FF3104";
        } else if (text.length <= 54) {
            setShowError(false);
            inputRef.current.style.borderColor = "#FFCD04";
        }
    }, [text]);

    useEffect(() => {
        if (showError) {
            errorRef.current.style.visibility = "visible";
        } else {
            errorRef.current.style.visibility = "hidden";
        }
    }, [showError]);

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
                        ref={inputRef}
                        onClick={(e) => {
                            e.preventDefault();
                            // setTextLength(1)
                            clearTextRef.current.style.display = "block";
                        }}
                        placeholder="Write here"
                        maxLength={54}
                        type="text"
                        value={text}
                        onChange={(e) => {
                            // setTextLength(textLength + 1);
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
                    {/* {showError && (
                        <div className="error">
                            Task content can contain max 54 characters.
                        </div>
                    )} */}
                    <div ref={errorRef} className="error">
                        Task content can contain max 54 characters.
                    </div>
                    <span
                        ref={clearTextRef}
                        onClick={(e) => {
                            e.preventDefault();
                            setText("");
                            clearTextRef.current.style.display = "none";
                        }}
                        className="clearText"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>

                <button
                    className="addBtn"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        if (!showError) {
                            console.log("clicked");
                            onAdd(text);
                            setText("");
                        }
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
