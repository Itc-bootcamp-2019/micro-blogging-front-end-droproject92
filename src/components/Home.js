import React from "react";
import TweetBox from "./TweetBox";
import TweetMsg from "./TweetMsg";
import { getTweetsList, postTweet } from "../lib/api";
import { Ring } from "react-awesome-spinners";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tweets: []
    };
  }

  async handleData() {
    try {
      this.setState({ isLoading: true });
      const response = await getTweetsList();
      const { data } = response;
      this.setState({
        tweets: data.tweets,
        isLoading: false
      });
    } catch (e) {
      console.error("Server Failed ;/");
    }
  }

  componentDidMount() {
    this.handleData();
    this.handleInput();
  }

  async handleInput(userName, date, content) {
    try {
      this.setState({ isLoading: true });
      const tweet = { userName, date, content };
      await postTweet({ tweet: tweet });
      this.setState({
        tweets: [{ userName, date, content }, ...this.state.tweets],
        isLoading: false
      });
    } catch (e) {
      console.error("Server Failed ;/");
    }
  }

  render() {
    const { tweets, isLoading } = this.state;
    return (
      <div>
        <TweetBox
          isLoading={isLoading}
          onChange={(userName, date, content) =>
            this.handleInput(userName, date, content)
          }
        />
        {isLoading && (
          <div className="page-loader">
            <Ring />
          </div>
        )}
        {tweets.map(tweet => (
          <TweetMsg
            key={tweet.id}
            userName={tweet.userName}
            content={tweet.content}
            date={tweet.date}
          />
        ))}
      </div>
    );
  }
}

export default Home;
