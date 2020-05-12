import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Add(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState("");

  const addUser = () => {
    axios
      .post("http://localhost:7000/api/users/", { email, password })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/login");
        }
      })
      .catch((err) => {
        setExist("User Already exist");
        setPassword("");
      });
  };

  return (
    <div style={{ margin: "10px" }}>
      <h3>Register</h3>
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
      <button onClick={() => addUser()}>Register</button>
      <p>{exist}</p>
    </div>
  );
}

export default withRouter(Add);
