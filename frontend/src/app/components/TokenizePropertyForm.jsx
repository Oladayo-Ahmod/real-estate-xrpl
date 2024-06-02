"use client"

import { useState,useEffect} from 'react';
import { tokenizeProperty } from '../../services/api';
import { setAuthToken } from '@/services/auth';
import { ToastContainer, toast } from 'react-toastify';


const TokenizePropertyForm = () => {
    const [token, setToken] = useState()
    const [propertyId, setPropertyId] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        setToken(token)
        if (token) {
          setAuthToken(token);
        }
      }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tokenizeProperty(propertyId,token);
      toast.success('Property tokenized successfully!');
    } catch (error) {
      console.error('Error tokenizing property:', error);
      toast.error(error.response.data.message || 'Failed to tokenize property. Please try again.');
    }
  };

  return (
    <div className="container shadow p-4 mt-5 bg-white rounded">
        <ToastContainer />
    <h2>Tokenize Property</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="propertyId" className="form-label text-dark">Property ID</label>
        <input type="text" className="form-control" id="propertyId" value={propertyId} onChange={(e) => setPropertyId(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Tokenize Property</button>
    </form>
    </div>
  );
};

export default TokenizePropertyForm;
