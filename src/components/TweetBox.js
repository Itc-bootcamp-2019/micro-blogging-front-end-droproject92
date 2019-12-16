import React from "react";

class TweetBox extends React.Component {
  render() {
    return (
      <div className="display-tweet-box">
        <div className="tweet-box">
          <textarea className="text-box"
            type="text"
            placeholder="What you have in mind?..."
          ></textarea>
          <button className="tweet-btn">Tweet</button>
        </div>
      </div>
    );
  }
}

export default TweetBox;
