import React from "react";
import Picture from './components/Picture'
import { connect } from "react-redux";


function App({ state }) {
  return (
    <div className="App">
      <h1>Celebrity Dead or Alive App</h1>
      <Picture />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  {}
)(App);
