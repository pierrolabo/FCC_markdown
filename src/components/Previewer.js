import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});
class Previewer extends Component {
  createMarkup = () => {
    return {
      __html: marked(this.props.text),
    };
  };
  render() {
    return (
      <div className='previewer-container'>
        <h2>Previewer</h2>
        <div
          className='previewer-display'
          id='preview'
          dangerouslySetInnerHTML={this.createMarkup()}
        ></div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps)(Previewer);
