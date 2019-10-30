import React from "react";
import { Tab } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const panes = [
  {
    menuItem: "Login",
    render: ({ history, loginUser }) => (
      <Tab.Pane>
        <LoginForm history={history} loginUser={loginUser} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Register",
    render: ({ history, registerUser }) => (
      <Tab.Pane>
        <RegisterForm history={history} registerUser={registerUser} />
      </Tab.Pane>
    )
  }
];

const LogReg = ({ history, loginUser, registerUser }) => {
  return (
    <Tab
      className="login-form-container"
      panes={panes}
      history={history}
      loginUser={loginUser}
      registerUser={registerUser}
    />
  );
};
export default LogReg;
