import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Filters</h2>
      </div>
    );
  }
}

export default FilterBar;
