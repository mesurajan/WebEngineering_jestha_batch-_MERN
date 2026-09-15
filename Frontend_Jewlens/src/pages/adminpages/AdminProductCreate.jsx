import React, { useState } from "react";
import axios from "axios";
import API_URL from "../../api/api";

function AdminProductCreate() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/products`, {
        productName: productName,
        productDescription: productDescription,
        productPrice: Number(productPrice),
      });

      alert("Product created successfully");

      setProductName("");
      setProductDescription("");
      setProductPrice("");
    } catch (error) {
      alert("Product not created" + error.message);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
        />

        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default AdminProductCreate;
