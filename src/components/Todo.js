import React from 'react';

const ToDo = props => (
    <div>
        <div style={{
            textDecoration: props.todo.complete ? "line-through" : ""
        }}>
            {props.todo.text}
        </div>
        <button onClick={props.toggleComplete}>
            {props.todo.complete ? "uncheck" : "check"}
        </button>
        <button onClick={props.deleteTodo}>
            delete
        </button>
    </div>
)


export default ToDo;