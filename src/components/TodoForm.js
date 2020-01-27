import React, { useState } from 'react';
import shortid from 'shortid';

const TodoForm = props => {
    const [state, setState] = useState({ text: '' });
    const handleChange = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
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
        <form onSubmit={handleSubmit}>
            <input
                name='text'
                value={state.text}
                onChange={handleChange}
                placeholder='todo...'
            />
            <button onClick={handleSubmit}>Add ToDo</button>
        </form>
    );
}
export default TodoForm;