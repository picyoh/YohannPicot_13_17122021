import { createStore } from "redux";

// states
const initialState = {
  loading: false,
  access: false,
  token: null,
  name: {
    firstName: null,
    lastName: null,
  },
  userId: null,
};

// action creators
const setLoading = (loading) => {
  return {
    type: "loading",
    payload: loading,
  };
};
const logIn = (access) => {
  return {
    type: "logIn",
    payload: access,
  };
};
const logOut = (access) => {
  return {
    type: "logOut",
    payload: access,
  };
};

const setToken = (token) => {
  return {
    type: "token",
    payload: token,
  };
};

const setName = (name) => {
  return {
    type: "name",
    payload: name,
  };
};

const setUserId = (userId) => {
  return {
    type: "userId",
    payload: userId,
  };
};

// reducer
function reducer(state, action) {
  if (action.type === "loading") {
    return {
      ...state,
      loading: !state.loading,
    };
  }
  if (action.type === "logIn") {
    return {
      ...state,
      access: true,
    };
  }
  if (action.type === "logOut") {
    return initialState;
  }
  if (action.type === "token") {
    return {
      ...state,
      token: action.payload,
    };
  }
  if (action.type === "name") {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === "userId") {
    return {
      ...state,
      userId: action.payload,
    };
  }
  return state;
}

// store
const store = createStore(reducer, initialState);

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state);
// });

export { store, setLoading, logIn, logOut, setToken, setName, setUserId };
