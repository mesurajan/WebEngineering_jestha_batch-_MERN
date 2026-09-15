import ProductCard from "../components/Reusable/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Collection() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const productdatas = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://pahiran-backend.onrender.com/api/products",
        );
        setData(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        setError("Error fetching product data: " + error.message);
        setLoading(false);
      }
    };
    productdatas();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <div className="container">
        Collection
        <ProductCard />
      </div>

      <h1>Libe data fecth</h1>
      {data &&
        data.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
    </>
  );
}

export default Collection;
