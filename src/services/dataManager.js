import axios from "axios";
import { store, setLoading } from "./store";

// Server URL
const Base_URL = "http://localhost:3001/api/v1/";

/**
 * [Send user infos to get access token from database]
 *
 * @param   {String}    email       [email form input value]
 * @param   {String}    password    [password from input value]
 */
async function getAccess(email, password) {
  axios
    .post(Base_URL + "user/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200) {
        // Get token
        const token = response.data.body.token;
        store.dispatch({ type: "token", payload: token });
        // Load profile
        loadProfile(token);
      }
    });
}

/**
 * [Load user Profile]
 *
 * @param   {String}   token         [JWT token from database]
 */

async function loadProfile(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(Base_URL + "user/profile", token, {
      headers: headers,
    })
    .then((response) => {
      if (response.status === 200) {
        // Set name Object
        const firstname = response.data.body.firstName;
        const lastname = response.data.body.lastName;
        const name = {
          firstname: firstname,
          lastname: lastname,
        };
        store.dispatch({ type: "name", payload: name });
        // set access to profile
        store.dispatch({ type: "logIn" });
        // close Loading
        store.dispatch(setLoading(false));
      }
    });
}

/**
 * [Edit user name]
 *
 * @param   {String}   firstname     [firstname from input value]
 * @param   {String}   lastname      [lastname from input value]
 */
async function editNewName(firstname, lastname) {
  // Get token
  const token = store.getState().token;
  // Set newName object
  const newName = {
    firstName: firstname,
    lastName: lastname,
  };
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  axios
    .put(Base_URL + "user/profile", newName, {
      headers: headers,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("put reussi", response);
        const firstname = response.data.body.firstName;
        const lastname = response.data.body.lastName;
        const name = {
          firstname: firstname,
          lastname: lastname,
        };
        console.log(name);
        store.dispatch({ type: "name", payload: name });
        store.dispatch(setLoading(false));
      }
    });
}

async function createUser() {
  const token = store.getState().token;
  console.log(token);
}

export { getAccess, editNewName, createUser };
