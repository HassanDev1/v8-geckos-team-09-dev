import React from "react";
import '../style/TodoItem.css';

function TodoItem(props) {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
                className="todo-element"
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p  
                className="todo-element"
                style={props.item.completed ? completedStyle: null}
            >
                {props.item.text}
            </p>
            <button
                className="todo-element remove-button"
                onClick={() => props.deleteTodo(props.item.id)}
            >
            x
            </button>
        </div>
    )
}

                

export default TodoItem;