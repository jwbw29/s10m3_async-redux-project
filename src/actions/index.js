import axios from "axios";

export const FIND_FRIEND = "FIND_FRIEND";
export const FIND_FRIEND_SUCCESS = "FIND_FRIEND_SUCCESS";
export const FIND_FRIEND_ERROR = "FIND_FRIEND_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

const URL = "https://randomuser.me/api";

export const findFriend = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get(URL)
    .then((res) => {
      const friend = res.data.results[0];
      console.log(friend);
      dispatch(setIsFetching(false));
      dispatch(findFriendSuccess(friend));
    })
    .catch((err) => {
      const message = err.message;
      dispatch(findFriendError(message));
    });

  return { type: FIND_FRIEND };
};

const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, payload: isFetching };
};
const findFriendSuccess = (friend) => {
  return { type: FIND_FRIEND_SUCCESS, payload: friend };
};
const findFriendError = (message) => {
  return { type: FIND_FRIEND_ERROR, payload: message };
};
