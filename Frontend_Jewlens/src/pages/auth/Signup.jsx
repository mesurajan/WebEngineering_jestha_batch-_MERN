import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../api/api";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    phone: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful");

        navigate("/login");
      } else {
        if (data.errors && data.errors.length > 0) {
          alert(data.errors[0].message);
        } else {
          alert(data.message || "Registration failed");
        }
      }
    } catch (error) {
      console.error("Signup Error:", error);

      alert("Unable to connect to server");
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <br />

        <input
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Email */}
        <label>Email:</label>
        <br />

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Phone */}
        <label>Phone:</label>
        <br />

        <input
          type="text"
          placeholder="+977 9800000000"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Address */}
        <label>Address:</label>
        <br />

        <input
          type="text"
          placeholder="Kathmandu, Nepal"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Password */}
        <label>Password:</label>
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Confirm Password */}
        <label>Confirm Password:</label>
        <br />

        <input
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
          required
        />

        <br />
        <br />

        {/* Terms */}
        <label>
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) =>
              setFormData({
                ...formData,
                terms: e.target.checked,
              })
            }
          />{" "}
          I agree to the terms and conditions
        </label>

        <br />
        <br />

        <button type="submit">Signup</button>
      </form>

      <br />

      <p>
        Already have an account?{" "}
        <button type="button" onClick={() => navigate("/login")}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;
