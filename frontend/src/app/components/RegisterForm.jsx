"use client"

import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { registerUser } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ name, email, password });
      setMessage(response.message);
      toast.success(response.message)
    } catch (error) {
        toast.error('Error registering user')
        setMessage('Error registering user');
    }
  };

  return (
    <div className="container shadow p-4 mt-5 bg-white rounded">
    <ToastContainer />
    <Form onSubmit={handleSubmit}>
      {message && <Alert variant="info">{message}</Alert>}
      <Form.Group controlId="name">
        <Form.Label className='text-dark'>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label className='text-dark'>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  );
};

export default RegisterForm;
