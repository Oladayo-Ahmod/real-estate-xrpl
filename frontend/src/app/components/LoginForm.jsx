"use client"

import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from '../../services/api';
import { setAuthToken } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const { token } = response;
      setToken(token);
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      toast.success('Login successful!');

      setTimeout(()=>{
        router.push('/add-property');
      },2000)
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container shadow p-4 mt-5 bg-white rounded">
      <ToastContainer />
    
    <Form onSubmit={handleSubmit}>
      {message && <Alert variant="info">{message}</Alert>}
      <Form.Group controlId="email">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label className='text-dark'>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
};

export default LoginForm;
