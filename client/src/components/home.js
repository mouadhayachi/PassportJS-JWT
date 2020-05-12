import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function Home() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded)
    setEmail(decoded.email);
  }, [email]);

  return (
    <div>
      <h1>Dashboard Admin</h1>
      <h2>Hello {email},</h2>
    </div>
  );
}

export default Home;
