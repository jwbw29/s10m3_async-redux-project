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
    age: 77,
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
    default:
      return state;
  }
};
