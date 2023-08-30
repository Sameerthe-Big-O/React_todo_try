import React from "react";
import Todo from "./todo";
const Tasklist = ({ items, marktrue, deleteTodo, editTodo }) => {
    return (
        <>
            {items.map((todo, i) => {
                return <Todo key={todo.id} todo={todo} marktrue={marktrue} deleteTodo={deleteTodo} editTodo={editTodo} />
            })}
        </>
    )

}


export default Tasklist; 