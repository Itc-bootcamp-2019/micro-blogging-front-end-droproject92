import React from "react";
import MyContext from "../context/MyContext";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isZero: false,
      userName: JSON.parse(localStorage.getItem("userName")),
      content: " "
    };
  }
  handleOnChange = event => {
    const textInput = event.target.value;
    const charCount = textInput.length;
    const isValid = charCount < 141;
    this.setState({
      isValid: isValid,
      content: textInput
    });
  };

  render() {
    // const { tweet } = this.state;
    return (
      <MyContext.Consumer>
        {context => (
          <div className="display-tweet-box">
            <div className="tweet-box">
              <textarea
                className="text-box"
                placeholder="What you have in mind?..."
                name="tweet"
                onChange={this.handleOnChange}
              ></textarea>
              <button
                type="button"
                onClick={() => {
                    const tweet = { userName: this.state.userName, date: new Date().toISOString(), content: this.state.content }
                    context.addTweet(tweet);
                }

                }
                disabled={
                  !this.state.isValid ||
                  this.state.isZero ||
                  this.props.isLoading
                }
                className="tweet-btn"
              >
                Tweet
              </button>
              {!this.state.isValid && (
                <p className="max-charac-msg">
                  The tweet can't contain more then 140 chars or zero
                  characters.
                </p>
              )}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default TweetBox;
