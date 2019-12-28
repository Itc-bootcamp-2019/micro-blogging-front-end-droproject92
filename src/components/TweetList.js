import React from "react";
import MyContext from "../context/MyContext";

const TweetList = props => {
  return (
    <div>

    <MyContext.Consumer>
      {({ addTweet, tweets }) => (
        <div className="display-tweet-list">
          {tweets.map(tweet => {
            return (
              <div className="display-tweet-list">
                <div className="tweet-msg">
                  <div className="tweet-msg-info">
                    <div className="tweet-msg-header">
                      <p className="tweet-msg-header-p1">{tweet.userName}</p>
                      <p className="tweet-msg-header-p2">{tweet.date}</p>
                    </div>
                    <div className="tweet-msg-text">
                      <p>{tweet.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </MyContext.Consumer>
    </div>
  );
};

export default TweetList;
