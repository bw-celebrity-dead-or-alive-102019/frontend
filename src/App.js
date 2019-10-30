import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import {
  registerUser,
  loginUser,
  deleteUser,
  displayUsers,
  getCelebs,
  startQuiz,
  captureResponse
} from "actions";
import Nav from "components/Nav";
import LogReg from "components/LogReg";
import UserList from "components/UserList";
import Quiz from "components/Quiz";
import "semantic-ui-css/semantic.min.css";

function App({
  state,
  registerUser,
  loginUser,
  deleteUser,
  displayUsers,
  getCelebs,
  startQuiz,
  captureResponse,
  history
}) {
  const PrivateRoute = ({
    component: Component,
    deleteUser,
    displayUsers,
    state,
    getCelebs,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component
            deleteUser={deleteUser}
            displayUsers={displayUsers}
            state={state}
            getCelebs={getCelebs}
            {...props}
          />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <div className="App">
      <div className="main-wrapper">
        <Nav history={history} />
        <h1 className="app-h1">Celebrity Dead or Alive App</h1>
        <Route exact path="/">
          <LogReg
            state={state}
            registerUser={registerUser}
            loginUser={loginUser}
            history={history}
          />
        </Route>
        <PrivateRoute
          exact
          path="/admin"
          component={UserList}
          deleteUser={deleteUser}
          displayUsers={displayUsers}
        />
        <Route path="/quizme">
          <Quiz
            state={state}
            getCelebs={getCelebs}
            history={history}
            startQuiz={startQuiz}
            captureResponse={captureResponse}
          />
        </Route>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  {
    registerUser,
    loginUser,
    deleteUser,
    displayUsers,
    getCelebs,
    startQuiz,
    captureResponse
  }
)(withRouter(App));
