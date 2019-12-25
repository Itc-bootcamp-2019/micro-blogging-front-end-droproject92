import React from "react";

const MyContext = React.createContext({
  tweets: [],
  addTweet: tweet => {}
});

export default MyContext;
