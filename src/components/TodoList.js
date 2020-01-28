import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import TodoFilter from './TodoFilter';
import Todo from './Todo';

/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

const TodoList = () => {
    const [state, setState] = useState({
        todos: [],
        display: "all",
        // filter: ""
    });
    const addTodo = (todo) => {
        setState(state => ({
            todos: [todo, ...state.todos],
            display: state.display
        }));
    }

    const toggleComplete = id => {
        setState({
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
            }),
            display: state.display
        })
    };
    
    const deleteTodo = id => {
        setState({
            todos: state.todos.filter(todo=>  todo.id !== id),
            display: state.display
        })
    }

    const checkTodosLeft = todos => {
        return todos.filter(todo => !todo.complete).length
    }

    const changeDisplay = args => {
        if (args === 'all' || args === 'in progress' || args === 'complete') {
            setState({
                todos: state.todos,
                display: args
            })
        }
    }

    const displayTodos = () => {
        if(state.display === 'all'){
            return state.todos
        }
        else if(state.display === 'in progress'){
            return state.todos.filter(todo => !todo.complete)   
        }        
        else if(state.display === 'complete'){
            return state.todos.filter(todo => todo.complete)
        }
    }



    return (
        <div>
            {console.log("render")}
            {console.log(state)}
            <p>todo list</p>
            <TodoForm onSubmit={addTodo} />
            {/* <TodoFilter state={state}/> */}
            {displayTodos().map(todo =>
                <Todo
                    key={todo.id}
                    toggleComplete={() => toggleComplete(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                    todo={todo}
                />
            )}
            <div>todos left: {checkTodosLeft(state.todos)}</div>
            <button onClick={() => changeDisplay('all')}>all</button>
            <button onClick={() => changeDisplay('in progress')}>in progress</button>
            <button onClick={() => changeDisplay('complete')}>complete</button>
        </div>
    );
}

export default TodoList;
