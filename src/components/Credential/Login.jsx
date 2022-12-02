import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const login = (e) => {
    e.preventDefault();
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (data1 == password && data == email) {
      navigate("/");
    } else {
      alert("invalid details");
    }
  };
  return (
    <div class="m-5">
      <main
        class="form-signin w-50 m-auto p-5"
        style={{
          border: "1px solid #cecece",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={login}>
          <div className="text-center">
            <img
              class="mb-4"
              src="https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png"
              alt=""
              width="72"
              height="72"
            />
          </div>
          <h1 class="h3 mb-3 fw-normal">Please Log in</h1>

          <div class="form-floating">
            <input
              onChange={(e) => setData(e.target.value)}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating my-3">
            <input
              onChange={(e) => setData1(e.target.value)}
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Log in
          </button>
        </form>
      </main>
      {data}
      {data1}
    </div>
  );
};

export default Login;
