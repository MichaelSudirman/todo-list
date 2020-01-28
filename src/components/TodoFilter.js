import React, { useState } from 'react';

const TodoFilter = props => {
    const [state, setState] = useState({ filterText: '' })

    const filterChange = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
        props.onChange(event.target.value)
    }

    const resetSubmit = event => {
        event.preventDefault()
        setState({ text: '' });
        props.onChange('')
    }

    return (
        <form>
            <input
                name='text'
                value={state.text}
                onChange={filterChange}
                placeholder='filter...'
            />
            <button onClick={resetSubmit}>Reset</button>
        </form>
    )
}


export default TodoFilter;