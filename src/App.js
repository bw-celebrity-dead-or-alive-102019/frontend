import React from "react";
import { connect } from "react-redux";

function App({ state }) {
  return (
    <div className="App">
      <h1>Celebrity Dead or Alive App</h1>
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  {}
)(App);
