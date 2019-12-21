import React from "react";
import TweetBox from "./TweetBox";
import TweetMsg from "./TweetMsg";
import { getTweetsList, postTweet } from "../lib/api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  async handleData() {
    const response = await getTweetsList();
    const { data } = response;
    this.setState({ tweets: data.tweets });
  }

  componentDidMount() {
    this.handleData();
    // this.handleInput();
  }

  async handleInput(userName, date, content) {
    const tweet = { userName, date, content };
    await postTweet({tweet: tweet})
    this.setState({ tweets: [{userName, date, content},...this.state.tweets] });
  }

  render() {
    const { tweets } = this.state;
    const {tweet} = this.state;
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
