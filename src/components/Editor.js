import React, { Component } from "react";
import { connect } from "react-redux";
import { updateText } from "../actions/updateTextAction";

class Editor extends Component {
  handleChange = (e) => {
    this.props.updateText(e.target.value);
  };
  prop;
  render() {
    return (
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          name=""
          id="editor"
          cols="30"
          rows="10"
          onChange={this.handleChange}
          value={this.props.text}
        ></textarea>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => {
      dispatch(updateText(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
