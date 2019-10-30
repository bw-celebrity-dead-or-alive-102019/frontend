import React from "react";

import Admin from "./Admin";
import QuizLink from "./QuizLink";
import { Icon } from "semantic-ui-react";

const Nav = ({ history }) => {
  return (
    <div className="nav">
      <Icon name="home" onClick={() => history.push("/")} />
      <QuizLink history={history} />
      <Admin history={history} />
    </div>
  );
};

export default Nav;
