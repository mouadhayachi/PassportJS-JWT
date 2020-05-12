import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}
    >
      {localStorage.getItem("token") !== null ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            props.history.push("/login");
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default withRouter(Navbar);
