import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onChange, onDelete }) => {
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
                        onDelete(todo);
                    }}
                    className="delBtn"
                >
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </label>
        </div>
    );
};

export default TodoItem;
