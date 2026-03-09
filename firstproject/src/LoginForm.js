// LOGIN

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const LoginForm = () => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // default username --> admin@gmail.com
    // default password --> admin

    if (username === "admin@gmail.com" && password === "admin") {
      dispatch(login({ username }));
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container border border-primary p-4 my-4"
      style={{ maxWidth: "500px" }}
    >
      <h1>Login</h1>
      <p> For Admin please use admin@gmail.com and admin </p>
      <div class="form-floating mb-3">
        <input
          required
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          required
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        ></input>
        <label for="floatingPassword">Password</label>
      </div>
    </form>
  );
};

export default LoginForm;
