import React, { useState } from "react";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white rounded shadow p-4" style={{ width: "400px" }}>
        <h1 className="text-center mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}>Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="usernameHelp"
              required
              style={{ borderRadius: "0.5rem", transition: "border-color 0.3s" }}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "")}
            />
            <div id="usernameHelp" className="form-text">
              We'll never share your details with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "0.5rem", transition: "border-color 0.3s" }}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "")}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              borderRadius: "0.5rem",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Log In
          </button>

          <div className="text-center mt-3">
            <a href="/forgot-password" className="link-primary">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
