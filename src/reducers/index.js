import {
  FIND_FRIEND,
  FIND_FRIEND_SUCCESS,
  FIND_FRIEND_ERROR,
  SET_IS_FETCHING,
} from "../actions";

const initialState = {
  friend: {
    name: {
      first: "Carolina",
      last: "Méndez",
    },
    gender: "female",
    picture: {
      large: "https://randomuser.me/api/portraits/women/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    },
    dob: { age: 77 },
    location: {
      state: "Castilla y León",
      country: "Spain",
    },
    email: "carolina.mendez@example.com",
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case FIND_FRIEND_SUCCESS:
      return { ...state, isFetching: false, friend: action.payload };
    case FIND_FRIEND_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
