// LOGIN

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      setUsername("");
      setPassword("");
    }
  }, [isAuthenticated]);

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
      <div className="form-floating mb-3">
        <input
          required
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          required
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label htmlFor="floatingPassword">Password</label>
        <button type="Submit" className="btn btn-primary mt-3">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
