import React from "react";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars_left: 140
    };
  }
  HandleWordCount = (event) => {
    const charCount = event.target.value.length;
    const charsLength = 140 - charCount;
    this.setState({ chars_left:charsLength });
    console.log(this.state.chars_left);
    
  };

  render() {
    return (
      <div className="display-tweet-box">
        <div className="tweet-box">
          <textarea
            className="text-box"
            placeholder="What you have in mind?..."
            name="tweet"
            onChange={this.HandleWordCount}
          ></textarea>
          <button
            type="button"
            onClick={() => console.log('tweet')}
            disabled={this.state.chars_left <= 0 ? "disabled" : null}
            className="tweet-btn"
          >
            Tweet
          </button>
          {this.state.chars_left <= 0 ? <p className="max-charac-msg">The tweet can't contain more then 140 chars.</p> : null}
          
          
        </div>
      </div>
    );
  }
}

export default TweetBox;
