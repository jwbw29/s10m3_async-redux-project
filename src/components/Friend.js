import React from "react";
import { connect } from "react-redux";
import { findFriend } from "../actions";

const Friend = () => {
  return (
    <>
      <div className="friend-container">
        <button>Find a Friend</button>
        <h1>
          Meet: {friend.name.first} {friend.name.last}
        </h1>
        <img src={friend.picture.large} alt="newFriend" />
        <p>
          {friend.gender === "female" ? "She" : "He"}'s {friend.age}{" "}
          {friend.age === 1 ? "year" : "years"} old and lives in{" "}
          {location.state}, {location.country}
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(Friend);
