import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const signInHandler = async (email, password) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBl3rcB9zF6RKJu_jhIgtx124tIASRJXoQ",
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = async (event) => {
    event.preventDefault();
    // valid input
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 8
    )
      return;
    // valid user and password
    const response = await signInHandler(email, password);
    if (response.error) return console.log(response.error.message);
    navigate("/products", { replace: true });
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <div className="container-sm" style={{ maxWidth: 740 }}>
          <div className="card">
            <h1 className="card-title text-center">Log In</h1>
            <div className="card-body">
              <div className="login">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  id="id"
                  type="text"
                  placeholder="ID..."
                  name="id"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="errorEmail" className="invalidForm"></small>
              </div>
              <div className="login">
                <label>Password</label>
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Password..."
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small id="errorPassword" className="invalidForm"></small>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary">LOG IN</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
