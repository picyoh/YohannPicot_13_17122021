import axios from "axios";
import { store, setLoading } from "./store";

// Mocked options
const mockedData = false;
const mockedUsers = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

// Server URL
const Base_URL = "http://localhost:3001/api/v1/";

// check Authentification
async function getAccess(email, password) {
  if (mockedData) {
    window.setTimeout(() => {
      const token = "token";
      store.dispatch({ type: token, payload: token });
      loadProfile(token);
    }, 1000);
  } else {
    axios
      .post(Base_URL + "user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.body.token;
          store.dispatch({ type: "token", payload: token });
          loadProfile(token);
        }
      });
  }
}
// Load User Profile
async function loadProfile(token) {
  if (mockedData) {
    const user = mockedUsers[0];
    const firstname = user.firstName;
    const lastname = user.lastName;
    const name = {
      firstname: firstname,
      lastname: lastname,
    };
    store.dispatch({ type: "name", payload: name });
    store.dispatch({ type: "logIn" });
    store.dispatch(setLoading(false));

    return true;
  } else {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(Base_URL + "user/profile", token, {
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          const firstname = response.data.body.firstName;
          const lastname = response.data.body.lastName;
          const name = {
            firstname: firstname,
            lastname: lastname,
          };
          store.dispatch({ type: "name", payload: name });
          store.dispatch({ type: "logIn" });
          store.dispatch(setLoading(false));

          return true;
        }
      });
  }
}

async function editNewName(firstname, lastname) {
  const token = store.getState().token;
  const newName = {
    firstName: firstname,
    lastName: lastname,
  };
  console.log(newName)
  if (mockedData) {

    store.dispatch(setLoading(false));

    return true;

  } else {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .put(Base_URL + "user/profile", newName, {
        headers: headers,
        
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("put reussi", response)
          const firstname = response.data.body.firstName;
          const lastname = response.data.body.lastName;
          const name = {
            firstname: firstname,
            lastname: lastname,
          };
          store.dispatch({ type: "name", payload: name });
          store.dispatch(setLoading(false));
          return true;
        }
      });
  }
}

async function createUser() {
  const token = store.getState().token;
  console.log(token);
}

export { getAccess, editNewName, createUser };
