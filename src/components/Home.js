import React from "react";
import { getTweetsList, postTweet } from "../lib/api";
import { Ring } from "react-awesome-spinners";
import MyContext from "../context/MyContext";
import TweetList from "./TweetList";
import NewTweet from "./NewTweet"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tweets: [],
      addTweet: this.handleInput.bind(this)
      
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

  async handleInput(tweet) {
    try {
      this.setState({ isLoading: true });

      await postTweet(tweet);
      this.setState({
        tweets: [tweet, ...this.state.tweets],
        isLoading: false
      });
    } catch (e) {
      console.error("Server Failed ;/");
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <MyContext.Provider value={this.state}>
          <NewTweet />
          {isLoading && (
          <div className="page-loader">
            <Ring />
          </div>
        )}
          <TweetList />
        </MyContext.Provider>
      </div>
    );
  }
}

export default Home;
