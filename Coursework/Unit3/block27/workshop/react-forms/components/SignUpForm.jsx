import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello World!")
}



  return (
    <>
      {" "}
      <div>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:{" "}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </label>
          <label htmlFor="password">
            Password: <input type="text" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
