import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
 

function Login({ onIdSubmit }) {

    const idRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        
        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }
    return(
        <Container class="align-item-center d-felx " style={{height:'100vh'}}>
        <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
                <Form.Label>Enter your ID</Form.Label>
                <Form.Control type ="text" ref={idRef}></Form.Control>
            </Form.Group>
            <Button type="submit" className="mr-2">Login</Button>
            <Button onClick={createNewId}variant="sencondary">Create A New ID</Button>
        </Form>
        </Container>
    )
}

export default Login;
