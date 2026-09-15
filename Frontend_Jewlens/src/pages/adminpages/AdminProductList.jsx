import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import API_URL from "../../api/api";

function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data.products);
      } catch (error) {
        setError("Products not loaded.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="admin-welcome">
      <h1>Welcome to Product List</h1>
      <p>Here admin can see all products.</p>

      {loading && <p>Loading products...</p>}
      {error && <p className="admin-error">{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      <div className="admin-product-list">
        {products.map((product) => (
          <div className="admin-product-card" key={product._id}>
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <strong>Rs. {product.productPrice}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProductList;
