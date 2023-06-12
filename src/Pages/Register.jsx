import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Toaster from '../components/Toaster';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';


const Register = () =>{
    const navigate = useNavigate()


    const [showToast, setShowToast] = useState(false)
    const [message, setMessage] = useState('')

    const [data, setData] = useState({
        nama: '',
        username: '',
        email: '',
        password: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {nama, username, email, password} = data
        try{
            const {data} = await registerUser(nama, username, email, password)
                if(data.error){ 
                    setMessage(data.error)                   
                    setShowToast(true)
                    setTimeout(() => {
                        setShowToast(false)
                    }, 2000);
                }else{ 
                    setData({})
                    setMessage('Register Successful. Please Login!')
                    setShowToast(true)
                    setTimeout(() => {
                        setShowToast(false)
                        navigate('/login')
                    }, 2000); 
                }
        }catch(err){
            console.log(err)
        }

        
        setTimeout(() => {
            setShowToast(false)
        }, 2000);

      }

    return(
        <Container className='loginForm-wrapper'>
        <Form className='loginForm'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control  type="text" placeholder="Enter nama" value={data.name} onChange={(e) => setData({...data, nama: e.target.value})} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  type="text" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control  type="text" placeholder="Enter username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            </Form.Group>
    
            <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
            </Button>
        </Form>
        {showToast ? 
            <Toaster message={message}/> : ""
        }
    </Container>
    )
}

export default Register