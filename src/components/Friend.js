import React from "react";
import { connect } from "react-redux";
import { findFriend } from "../actions";

const Friend = (props) => {
  const { friend, isFetching, error, findFriend } = props;

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Hold, please...</h2>;
  }

  const handleClick = () => {
    findFriend();
  };

  return (
    <>
      <div className="friend-container">
        <button onClick={handleClick}>Find a Friend</button>
        <h3 id="meet">Meet:</h3>
        <h1 id="name">
          {friend.name.first} {friend.name.last}
        </h1>
        <img src={friend.picture.large} alt="newFriend" />
        <p>
          {friend.gender === "female" ? "She" : "He"}'s {friend.dob.age}{" "}
          {friend.dob.age === 1 ? "year" : "years"} old and lives in{" "}
          <b>
            {friend.location.state}, {friend.location.country}
          </b>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    friend: state.friend,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { findFriend })(Friend);
