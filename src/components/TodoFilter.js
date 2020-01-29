import React, { useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

const TodoFilter = props => {
    // State for checking text
    const [state, setState] = useState({ filterText: '' })

    // Alter the state onChange and return the value to parent
    const changeFilter = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
        props.onChange(event.target.value)
    }

    // Reset filter when submitted
    const resetSubmit = event => {
        event.preventDefault()
        setState({ text: '' });
        props.onChange('')
    }

    return (
        <form class="d-flex m-1 align-item-center">
            <input
                class="form-control"
                name='text'
                value={state.text}
                onChange={changeFilter}
                placeholder='filter...'
            />
            <Button style={{ width: '8rem' }} variant="secondary" onClick={resetSubmit}>Reset</Button>
        </form>
    )
}


export default TodoFilter;