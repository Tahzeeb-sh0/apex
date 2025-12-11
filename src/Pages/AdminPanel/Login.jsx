import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  // Form data
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Full name only for signup
    if (isSignup && !form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email required + valid
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password required + min 6 chars
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = () => {
    if (validate()) {
      alert(isSignup ? "Signup Successful!" : "Login Successful!");
      console.log("Form Data:", form);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-h-[600px] max-w-[550px] p-8 rounded-xl shadow-xl">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {/* ---------------- SIGNUP FORM ---------------- */}
        {isSignup && (
          <>
            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full mt-1 h-[45px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              {errors.fullName && (
                <span className="text-red-500 text-xs mt-1">{errors.fullName}</span>
              )}
            </div>
          </>
        )}

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-1 h-[45px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder={isSignup ? "Create a password" : "Enter your password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full mt-1 h-[45px] px-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full h-[45px] bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Switch Card */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setErrors({});
              setForm({ fullName: "", email: "", password: "" });
            }}
            className="text-indigo-600 font-medium hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
