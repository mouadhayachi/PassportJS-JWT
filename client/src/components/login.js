import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState("");

  const login = () => {
    axios
      .post("http://localhost:7000/api/users/login", { email, password })
      .then((response) => {
      if (response.status === 200) {
          localStorage.setItem("token",response.data.token)
          props.history.push("/home");
        }
      })
      .catch((err) => {
        setExist("Please verify your login & password");
        setPassword("");
      });
  };

  return (
    <div style={{ margin: "10px" }}>
      <h3>Login</h3>
      <input
        type="text"
        placeholder="Please type your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Please type your Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => login()}>Login</button>
      <p>{exist}</p>
    </div>
  );
}

export default withRouter(Login);
