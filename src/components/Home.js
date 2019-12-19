import React from "react";
import TweetBox from "./TweetBox";
import TweetMsg from "./TweetMsg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    const tweetsArr = localStorage.getItem('tweets');
    const tweetsObj = JSON.parse(tweetsArr);
    this.setState({ tweets: tweetsObj});
  }

  handleInput = (username, date, content) => {
    this.setState({
      tweets: [{ username, date, content }, ...this.state.tweets]
    });
  };

  componentWillUpdate(newProps, nextState) {
    localStorage.setItem("tweets", JSON.stringify(nextState.tweets));
    localStorage.setItem("tweetsDate", Date.now());
  }

  render() {
    const { tweets } = this.state;

    return (
      <div>
        <TweetBox
          onChange={(username, date, content) =>
            this.handleInput(username, date, content)
          }
        />
        {tweets.map(tweet => (
          <TweetMsg
            username={tweet.username}
            content={tweet.content}
            date={tweet.date}
          />
        ))}
      </div>
    );
  }
}

export default Home;
