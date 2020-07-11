import React from "react";

class UserCard extends React.Components {
  render() {
    return (
      <div className="userCard">
        <img src={this.props.userData.avatar_url} />
        <div className="data">
          <p className="login">Name: {this.props.userData.login}</p>
          <p>Url: {this.props.userData.html_url}</p>
          <p>Bio: {this.props.userData.bio}</p>
          <p>Followers: {this.props.userData.followers}</p>
          <p>Following: {this.props.userData.following}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
