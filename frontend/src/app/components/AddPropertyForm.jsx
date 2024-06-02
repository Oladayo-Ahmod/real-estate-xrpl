"use client";
import { useState, useEffect } from "react";
import { registerProperty } from "../../services/api";
import { setAuthToken } from "@/services/auth";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const AddPropertyForm = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setToken(token);
    if (token) {
      setAuthToken(token);
    }
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerProperty({ title, description, price }, token);
      toast.success("Property added successfully!");
      setTitle("");
      setDescription("");
      setPrice("");

      setTimeout(() => {
        router.push("/verify-property");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response.data.message ||
          "Failed to add property. Please try again."
      );
    }
  };

  return (
    <div className="container shadow p-4 mt-5 bg-white rounded">
      <ToastContainer />
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-dark">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-dark">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label text-dark">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
