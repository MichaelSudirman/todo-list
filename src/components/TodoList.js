import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [state, setState] = useState({ todos: [] });
    const addTodo = (todo) => {
        console.log(todo)
        setState(state => ({
            todos: [todo, ...state.todos]
        }));
    }
    return (
        <div>
            <p>todos...</p>
            <TodoForm onSubmit={addTodo} />
            {console.log(state.todos)}
            {state.todos.map(
                todo => <Todo key={todo.id}> text={todo.text} /></Todo>
            )}
        </div>
    );
}

export default TodoList;
