import React from "react";
import { Link } from "react-router";

import Navigation from "./Navigation";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}
