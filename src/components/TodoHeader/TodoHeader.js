import React from "react";
import "./TodoHeader.css";

const TodoHeader = ({ todos, onHideCompleted }) => {
    todos.filter((todo) => todo.isCompleted);

    return (
        <div>
            <label className="hideCompleted">
                <input onChange={onHideCompleted} type="checkbox" />
                Hide Completed
            </label>
        </div>
    );
};

export default TodoHeader;
