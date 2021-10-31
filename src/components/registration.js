import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function Registration() {
    
    const [userName, setUserName] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [passwordd, setPasswordd] = useState('');

    function clearFields() {
        setUserName("");
        setEmailAdress("");
        setPasswordd("");
    }

    async function userPost() {
        const userDetails = {
            "username":userName,
            "email":emailAdress,
            "password":passwordd
        }
        // console.log(userDetails);
        await axios.post('http://localhost:5000/user-register', userDetails)
        .then((data)=>{
            Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true
                })
            clearFields()
        })
        .catch((err)=> {
            Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true
              })
        });
        // console.log(response);
    }
    return (
        <div>
        <Container style={{padding:"7%"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>User name</Form.Label>
                    <Form.Control  value={userName} onChange={ (e)=> setUserName(e.target.value)} placeholder="Enter username" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  value={emailAdress} onChange={ (e)=> setEmailAdress(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={passwordd} onChange={ (e)=> setPasswordd(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={userPost}>
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    ); 
}

export default Registration;