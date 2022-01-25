import { createStore } from "redux";

// states
const initialState = {
  loading: false,
  access: false,
  token: null,
  name: {
    firstname: null,
    lastName: null,
  },
};

// action creator

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
    payload: token
  };
};

const setName = (name) => {
  return {
    type: "name",
    payload: name,
  };
};

// reducer
function reducer(state, action) {
  if (action.type === "loading") {
    return {
      ...state,
      loading: action.payload,
    };
  };
  if (action.type === "logIn") {
    return {
      ...state,
      access: true,
    };
  };
  if (action.type === "logOut") {
    return initialState;
  };
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
  return state;
}

// store
const store = createStore(reducer, initialState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export { store, setLoading, logIn, logOut, setToken, setName };
