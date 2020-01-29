import React, { useState } from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const ToDo = props => {
    // State for Bootstrap Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class= "d-flex justify-content-center p-2">
            {/* Bootstrap Card Display */}
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title><div style={{ textDecoration: props.todo.complete ? "line-through" : "" }}>
                        {props.todo.text}</div></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {props.todo.complete ? "Completed" : "In Progress"}</Card.Subtitle>
                    <Card.Text>Date: TBA</Card.Text>
                    <Button style={{ margin: '1rem',width: '5rem' }} variant="outline-success" onClick={props.toggleComplete}>
                        {props.todo.complete ? "Uncheck" : "Check"}
                    </Button>
                    <Button style={{ margin: '1rem',width: '5rem' }} variant="outline-danger" onClick={handleShow}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
            {/* Bootstrap Modal Display */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete the following ToDo item:</Modal.Body>
                <Modal.Body>{props.todo.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={props.deleteTodo}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ToDo;