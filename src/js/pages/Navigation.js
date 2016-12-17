import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="First">First</Link>&nbsp;
        <Link to="Second">Second</Link>
      </div>
    );
  }
}
