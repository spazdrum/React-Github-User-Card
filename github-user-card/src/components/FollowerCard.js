import React from "react";

class FollowerCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.followersData.map((follower) => (
          <div className="followerCard">
            <img src={follower.avatar_url} className="followerImg" />
            <div className="data2">
              <p className="login2">Name: {follower.login}</p>
              <p>URL: {follower.html_url}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FollowerCard;
