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

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f1f5f9",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "100%",
      maxWidth: "420px",
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
    },

    header: {
      textAlign: "center",
      marginBottom: "30px",
    },

    title: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "8px",
    },

    subtitle: {
      fontSize: "14px",
      color: "#64748b",
      margin: "0",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },

    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#334155",
    },

    input: {
      height: "46px",
      padding: "0 14px",
      border: "1px solid #cbd5e1",
      borderRadius: "10px",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "#f8fafc",
    },

    button: {
      height: "48px",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "5px",
    },

    signupText: {
      textAlign: "center",
      marginTop: "25px",
      fontSize: "13px",
      color: "#64748b",
    },

    signupButton: {
      border: "none",
      background: "none",
      color: "#2563eb",
      fontWeight: "600",
      cursor: "pointer",
      marginLeft: "5px",
    },

    demoBox: {
      backgroundColor: "#f8fafc",
      border: "1px solid #e2e8f0",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "22px",
      fontSize: "12px",
      color: "#64748b",
      lineHeight: "1.7",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome Back</h1>

          <p style={styles.subtitle}>Login to continue to your dashboard.</p>
        </div>

        {/* Demo Credentials */}
        <div style={styles.demoBox}>
          <strong>Demo Admin</strong>
          <br />
          Email: admin@example.com
          <br />
          Password: password123
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email */}
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  email: e.target.value,
                })
              }
              required
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  password: e.target.value,
                })
              }
              required
              style={styles.input}
            />
          </div>

          {/* Login Button */}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {/* Signup */}
        <div style={styles.signupText}>
          Don't have an account?
          <button
            type="button"
            onClick={() => navigate("/signup")}
            style={styles.signupButton}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
