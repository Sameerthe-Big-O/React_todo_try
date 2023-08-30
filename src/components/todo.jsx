import React from "react";
import './todo.css'
const Todo = ({ todo, marktrue, deleteTodo, editTodo }) => {
    return (
        <div style={{ display: "flex" }}>
            <li
                onClick={marktrue}
                style={{
                    cursor: "pointer",
                    marginRight: "1rem"
                }}
                key={todo.id}
                id={todo.id}
                className={todo.complete ? "strike" : ""} >
                {todo.task}

            </li>

            <button id={todo.id}
                onClick={editTodo}
                className="editTodo" >
                Save
            </button>
            <button id={todo.id} onClick={deleteTodo} >
                Delete
            </button>
        </div>
    )
}

export default Todo;