import React from "react";

const TweetMsg = (props) => {
    
  return (
    <div className="display-tweet-list">
      <div className="tweet-msg">
          <div className="tweet-msg-info">
              <p>{props.userName}</p>
              <p>{props.date}</p>
          </div>
          <div className="tweet-msg-text">
              <p>{props.content}</p>
          </div>
      </div>

    </div>
  );
};

export default TweetMsg;