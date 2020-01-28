import React, { useState } from 'react';
import shortid from 'shortid';

const TodoForm = props => {
    const [state, setState] = useState({ text: '' });
    const formChange = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
    }
    const formSubmit = event => {
        event.preventDefault();
        const payload = {
            id: shortid.generate(),
            text: state.text,
            complete: false
        }
        props.onSubmit(payload)
        setState({ text: '' });
    }
    return (
        <form onSubmit={formSubmit}>
            <input
                name='text'
                value={state.text}
                onChange={formChange}
                placeholder='todo...'
            />
            <button onClick={formSubmit}>Add ToDo</button>
        </form>
    );
}
export default TodoForm;