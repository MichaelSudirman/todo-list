import React, { useState } from 'react';
import shortid from 'shortid';

// Bootstrap
import Button from 'react-bootstrap/Button';

const TodoForm = props => {
    // State for Bootstrap Modal
    const [state, setState] = useState({ text: '' });
    const formChange = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
    }

    // Return payload when the form is submitted
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
        <form class="d-flex m-1" onSubmit={formSubmit}>
            <input
                class="form-control"
                name='text'
                value={state.text}
                onChange={formChange}
                placeholder='todo...'
            />
            <Button style={{ width: '8rem' }} variant="secondary" onClick={formSubmit}>Add ToDo</Button>
        </form>
    );
}


export default TodoForm;