import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import Todo from './Todo';

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. filter todo
  8. delete all todo

*/

const TodoList = () => {
    const [state, setState] = useState({
        todos: [],
        display: "all",
        filter: ''
    });
    const addTodo = (todo) => {
        setState(state => ({
            ...state,
            todos: [todo, ...state.todos]
        }));
    }

    const toggleComplete = id => {
        setState({
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo
                }
            })
        })
    };

    const deleteTodo = id => {
        setState({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        })
    }

    const checkTodosLeft = todos => {
        return todos.filter(todo => !todo.complete).length
    }

    const changeDisplay = args => {
        if (args === 'all' || args === 'in progress' || args === 'complete') {
            setState({
                ...state,
                display: args
            })
        }
    }

    const displayTodos = () => {
        let newTodos;
        if (state.display === 'all') {
            newTodos = state.todos
        }
        else if (state.display === 'in progress') {
            newTodos = state.todos.filter(todo => !todo.complete)
        }
        else if (state.display === 'complete') {
            newTodos = state.todos.filter(todo => todo.complete)
        }
        newTodos = newTodos.filter(todo => todo.text.toLowerCase().indexOf(state.filter) >= 0)
        return newTodos
    }

    const filterChange = data => {
        setState({
            ...state,
            filter: data
        })
    }

    const deleteAllTodo = () => {
        setState({
            todos: [],
            display: 'all',
            filter: ''
        })
    }

    return (
        <div>
            <p>todo list</p>
            <TodoForm onSubmit={addTodo} />
            <TodoFilter onChange={filterChange} state={state} />
            {displayTodos().map(todo =>
                <Todo
                    key={todo.id}
                    toggleComplete={() => toggleComplete(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                    todo={todo}
                />
            )}
            <div>todos left: {checkTodosLeft(state.todos)}</div>
            <button onClick={() => changeDisplay('all')}>All</button>
            <button onClick={() => changeDisplay('in progress')}>In Progress</button>
            <button onClick={() => changeDisplay('complete')}>Complete</button>
            <button onClick={deleteAllTodo}>Delete All</button>
        </div>
        );
    }
    
    export default TodoList;
