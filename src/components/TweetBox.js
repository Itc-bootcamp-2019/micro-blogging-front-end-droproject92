import React from "react";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isZero: false,
      username:'Daniel',
      content: ''
    };
  }
  handleOnChange = (event) => {
    const textInput = event.target.value;
    const charCount = textInput.length;
    const isValid = charCount < 141;
    const isZero = charCount > 0;
    this.setState({ 
        isValid:isValid,
        content: textInput
     });
  };


  render() {
    return (
      <div className="display-tweet-box">
        <form className="tweet-box">
          <textarea
            className="text-box"
            placeholder="What you have in mind?..."
            name="tweet"
            onChange={this.handleOnChange}
          ></textarea>
          <button
            type="button"
            onClick={() => this.props.onChange(this.state.username,(new Date()).toISOString(),this.state.content)}
            disabled={!this.state.isValid || this.state.isZero}
            className="tweet-btn"
          >
            Tweet
          </button>
          {!this.state.isValid && <p className="max-charac-msg">The tweet can't contain more then 140 chars or zero characters.</p>}
          
        </form>
      </div>
    );
  }
}

export default TweetBox;
