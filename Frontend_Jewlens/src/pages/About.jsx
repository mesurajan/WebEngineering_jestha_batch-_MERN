import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../api/api";
function About() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setData(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return <h2>Loading posts...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <div>tesing</div>

      {data &&
        data.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
    </>
  );
}

export default About;
