import React, { useState } from "react";
import { axiosWithAuth } from "auth";

const RegisterForm = ({ registerUser, history }) => {
  const [creds, setCreds] = useState({
    name: "",
    username: "",
    password: "",
    err: null,
    status: null
  });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
      err: null,
      status: null
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (creds.name === "" || creds.username === "" || creds.password === "")
      setCreds({
        ...creds,
        err: "Please complete all fields...",
        status: "error"
      });
    else {
      axiosWithAuth()
        .post("https://celebs-dead-or-alive.herokuapp.com/auth/register", {
          name: creds.name,
          username: creds.username,
          password: creds.password
        })
        .then(res => {
          registerUser(creds.name, creds.username, creds.password);
          history.push("/quizme");
        })
        .catch(err => {
          console.error(err);
          setCreds({
            ...creds,
            err: "Sorry, this user doesn't exist...",
            status: "error"
          });
        });
    }
  };

  return (
    <form action="">
      <input
        type="text"
        name="name"
        placeholder="Enter your name..."
        value={creds.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter username..."
        value={creds.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={creds.password}
        onChange={handleChange}
      />
      <button onClick={history => handleSubmit(history)}>Register</button>
      {creds.err && (
        <div
          className={
            creds.status === "error" ? "message error" : "message success"
          }
        >
          {creds.err}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
