import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../api/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/auth/register`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
      });

      console.log("Registration Response:", response.data);

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);

      const message =
        error.response?.data?.errors?.[0]?.message ||
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        {/* Left Section */}
        <div className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-slate-200">
              WELCOME
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              Create your account and get started.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Join our platform and manage your account, explore products, and
              enjoy a simple and secure shopping experience.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                ✓
              </div>

              <p className="text-sm text-slate-300">Easy account management</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                ✓
              </div>

              <p className="text-sm text-slate-300">
                Secure registration process
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                ✓
              </div>

              <p className="text-sm text-slate-300">
                Simple shopping experience
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-10 lg:p-12">
          {/* Mobile Header */}
          <div className="mb-8 lg:hidden">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Welcome
            </span>

            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              Create your account
            </h1>
          </div>

          {/* Desktop Header */}
          <div className="mb-8 hidden lg:block">
            <h2 className="text-3xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details below to create your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </div>

            {/* Phone + Address */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+977 9800000000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Kathmandu, Nepal"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 accent-slate-900"
              />

              <span className="text-sm leading-6 text-slate-500">
                I agree to the{" "}
                <span className="font-semibold text-slate-900">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="font-semibold text-slate-900">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-slate-950 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
