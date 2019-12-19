import React from 'react';
import TweetBox from "./TweetBox";
import TweetMsg from "./TweetMsg";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        };
    }

    handleInput = (username,date,content) => {
        this.setState({ 
            tweets: [{username,date,content}, ...this.state.tweets]
        });
    }



    render() {
        const { tweets} = this.state;

        return (
            <div>
                <TweetBox onChange={(username,date,content) => this.handleInput(username,date,content)} />
                {tweets.map((tweet)=>  <TweetMsg username={tweet.username} content={tweet.content} date={tweet.date}/> )}
            </div>
        )

    }
}
        

export default Home;