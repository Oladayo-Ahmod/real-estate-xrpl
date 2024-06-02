"use client"

import { useState,useEffect} from 'react';
import { verifyProperty } from '../../services/api';
import { setAuthToken } from '@/services/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";



const VerifyPropertyForm = () => {
    const [token, setToken] = useState()
    const [propertyId, setPropertyId] = useState('');
  const router = useRouter();


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
        await verifyProperty(propertyId,token);
        toast.success('Property verified successfully!');

        setTimeout(() => {
            router.push("/tokenize-property");
          }, 2000);
        } catch (error) {
        console.error('Error verifying property:', error);
        toast.error(error.response.data.message || 'Failed to verify property. Please try again.');
        }
    };

  return (
    <div className="container shadow p-4 mt-5 bg-white rounded">
        <ToastContainer />
    <h2>Verify Property</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="propertyId" className="form-label text-dark">Property ID</label>
        <input type="text" className="form-control" id="propertyId" value={propertyId} onChange={(e) => setPropertyId(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Verify Property</button>
    </form>
    </div>
  );
};

export default VerifyPropertyForm;
