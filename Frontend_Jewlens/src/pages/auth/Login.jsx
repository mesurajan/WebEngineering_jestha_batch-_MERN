import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const admindetails = {
    email: "admin@example.com",
    password: "password123",
  };

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formdata.email === admindetails.email &&
      formdata.password === admindetails.password
    ) {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={formdata.email}
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={formdata.password}
            onChange={(e) =>
              setFormdata({ ...formdata, password: e.target.value })
            }
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
