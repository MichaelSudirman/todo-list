// import React, { useState } from 'react';

// const TodoFilter = props => {
//     const [state, setState] = useState({filterText: ''})

//     const filterChange = (event) => {
//         console.log(props.state)
//         setState({
//             [event.target.name]: event.target.value
//         })
//         // console.log(event.target.value)
//         props.setState({
//             todos:
//             display:props.state.display
//         })
//     }


//     const filterSubmit = event => {
//         event.preventDefault()
        
//         setState({ text: '' });
//     } 

//     return (
//         <form onSubmit={filterSubmit}>
//             <input
//                 name='text'
//                 value={state.text}
//                 onChange={filterChange}
//                 placeholder='filter...'
//             />
//             <button onClick={filterSubmit}>Reset</button>
//         </form>
//     )
// }


// export default TodoFilter;