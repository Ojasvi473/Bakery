import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    localStorage.setItem("email", data);
    localStorage.setItem("password", data1);
    return navigate("/login");
  };
  return (
    <div class="m-4 ">
      <main
        class="form-signup w-50 m-auto p-5"
        style={{
          border: "1px solid #cecece",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={signup}>
          <div className="text-center">
            <img
              class="mb-4"
              src="https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png"
              alt=""
              width="72"
              height="72"
            />
          </div>
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

          <div class="form-floating">
            <input
              type="email"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setData(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating my-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setData1(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
