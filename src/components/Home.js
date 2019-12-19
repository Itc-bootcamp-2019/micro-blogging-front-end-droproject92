import React from "react";
import TweetBox from "./TweetBox";
import TweetMsg from "./TweetMsg";
import {getTweetsList, postTweet} from "../lib/api"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

   async handleData () {
       const response = await getTweetsList();
       const { data } = response;
       console.log('data', data)
       this.setState({ tweets: data.tweets });

   }

   componentDidMount () {
       this.handleData();
   }

   async handleInput () {
    // const response = await getTweetsList();
    // console.log(response);
}


  render() {
    const { tweets } = this.state;
    console.log(tweets);
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
