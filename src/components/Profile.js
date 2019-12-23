import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      isLoading: false
    };
  }

  handleProfileOnChange(event) {
    const userInput = event.target.value;
    this.setState({
      userName: userInput
    });
  }

  handleProfileOnClick() {
    localStorage.setItem('userName', JSON.stringify(this.state.userName));
  }

  render() {
    return (
      <div className="display-profile-box">
        <div className="profile-wrapper">
          <div className="profile-H2-wrapper">
            <h2 className="profile-H2">Profile</h2>
          </div>
          <div className="profile-H4-wrapper">
            <h4 className="profile-H4">username</h4>
          </div>
          <div className="profile-box-wrapper">
            <div className="profile-box">
              <input
                className="profile-input"
                type="text"
                onChange={(event) => this.handleProfileOnChange(event)}
              ></input>
            </div>
          </div>
          <div className="profile-btn-wrapper">
            <button
              className="profile-btn"
              onClick={() => this.handleProfileOnClick()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
