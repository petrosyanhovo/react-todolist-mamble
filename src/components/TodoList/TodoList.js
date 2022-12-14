import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onChange, handleClickDelete }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onChange={onChange}
                        handleClickDelete={handleClickDelete}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
