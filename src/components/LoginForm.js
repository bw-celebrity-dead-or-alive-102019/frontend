import React, { useState } from "react";
import { axiosWithAuth } from "auth";

const LoginForm = ({ loginUser, history }) => {
  const [creds, setCreds] = useState({
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
    if (creds.username === "" || creds.password === "")
      setCreds({
        ...creds,
        err: "Please complete all fields...",
        status: "error"
      });
    else {
      axiosWithAuth()
        .post("https://celebs-dead-or-alive.herokuapp.com/auth/login", {
          username: creds.username,
          password: creds.password
        })
        .then(res => {
          loginUser(creds.username, creds.password);
          localStorage.setItem("token", res.data.token);
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
      <button onClick={history => handleSubmit(history)}>Login</button>
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

export default LoginForm;
