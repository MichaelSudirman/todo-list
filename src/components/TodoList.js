import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import Todo from './Todo';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
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
    // State used for storing and manipulating ToDo
    const [state, setState] = useState({
        todos: [],
        display: "all",
        filter: ''
    });

    // State for Bootstrap Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Adding and Deleteing Todo List
    const addTodo = todo => {
        setState(state => ({
            ...state,
            todos: [todo, ...state.todos]
        }));
    }
    const deleteTodo = id => {
        setState({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        })
    }
    // Delete all ToDo and alter Bootstrap Modal's state
    const deleteAllTodo = () => {
        setState({
            todos: [],
            display: 'all',
            filter: ''
        })
        setShow(false)
    }

    // Altering complete state based on id
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

    // Calculate number of ToDo with incomplete state
    const checkTodosLeft = todos => {
        return todos.filter(todo => !todo.complete).length
    }

    /*
        Re-render the display by swapping the state based on button clicked 
        Display Todos will filter the display based on the state changed
        changeFilter will also re-render and affect output of the display
    */
    const changeDisplay = args => {
        if (args === 'all' || args === 'in progress' || args === 'complete') {
            setState({
                ...state,
                display: args
            })
        }
    }
    const changeFilter = data => {
        setState({
            ...state,
            filter: data
        })
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




    return (
        <Container class="d-flex flex-row">
            <h1>Todo List</h1>
            {/* Inputs for adding and filtering ToDo lists */}
            <TodoForm onSubmit={addTodo} />
            <TodoFilter onChange={changeFilter} state={state} />
            <h5>todos left: {checkTodosLeft(state.todos)}</h5>
            {/* Button Features */}
            <div class="d-flex justify-content-center ">
                <Button style={{ margin: '1rem', width: '8rem' }} variant="outline-dark" onClick={() => changeDisplay('all')}>Show All</Button>
                <Button style={{ margin: '1rem', width: '8rem' }} variant="outline-info" onClick={() => changeDisplay('in progress')}>In Progress</Button>
                <Button style={{ margin: '1rem', width: '8rem' }} variant="outline-success" onClick={() => changeDisplay('complete')}>Complete</Button>
                <Button style={{ margin: '1rem', width: '8rem' }} variant="outline-danger" onClick={handleShow}>Delete All</Button>
            </div>
            {/* Display all the demanded ToDo lists */}
            <div class="d-flex flex-column">
                {displayTodos().map(todo =>
                    <Todo
                        key={todo.id}
                        toggleComplete={() => toggleComplete(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                        todo={todo}
                    />
                )}
            </div>
            {/* Modal for delete all ToDo lists */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete all of your ToDo list?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={deleteAllTodo}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default TodoList;
