import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../style/login.css'
import { loginUser } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import Toaster from '../components/Toaster';
import { UserContext } from '../context/userContext';


const Login = () =>{
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() =>{
        if(user) navigate('/home')
    }, [user])

    const [showToast, setShowToast] = useState(false)
    const [message, setMessage] = useState('')

    const [data, setData] = useState({
        username: '',
        password: ''
    })


  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password} = data
        try {
            const {data} = await loginUser(username, password)
            if(data.error){
                setMessage(data.error)
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 2000);
            }else{
                setData({})
                setMessage('Login Successful. Welcome!')  
                setShowToast(true) 
                setTimeout(() => {
                    setShowToast(false)
                    navigate('/home')
                    window.location.reload(false)
                }, 2000);            
                
            }
        } catch (error) {
            console.log(error)
        }

      }
  
    return (
            <Container className='loginForm-wrapper'>
                {user ? navigate('/home'): 
                <Form className='loginForm'>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control  type="text" placeholder="Enter email" value={data.username} onChange={(e) => setData({...data, username: e.target.value})} />
                    </Form.Group>
            
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                    </Form.Group>
            
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                    </Button>
                </Form>
                }   
                <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                {showToast ? 
                    <Toaster message={message}/> : ""
                }
            
            </Container>
    );
  

}

export default Login