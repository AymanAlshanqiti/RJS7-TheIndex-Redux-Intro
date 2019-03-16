import React, { Component } from "react";
import * as actionCreator from "./store/actions";

// Connecting to the Central Store
import { connect } from "react-redux";
import authors from "./data";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={() => this.props.addAuthor()}>+ ADD AUTHOR</button>
          </h4>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: () => dispatch(actionCreator.addAuthor())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
