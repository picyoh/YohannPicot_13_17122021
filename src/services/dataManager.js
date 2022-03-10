import axios from "axios";
import { store, setLoading, logIn, setToken, setName, setUserId } from "./store";

import { mockedDatas } from "../components/profile/mockedDatas/mockedAccount";

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
        store.dispatch(setToken(token));
        // Load profile
        loadProfile(token);
        return true;
      }
    })
    .catch((err) => {
      store.dispatch(setLoading());
      alert("wrong username or password");
      console.log(err);
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
        console.log(response)
        // Set name Object
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        const name = {
          firstName: firstName,
          lastName: lastName,
        };
        store.dispatch(setName(name));
        // get Id
        const userId = response.data.body.id;
        store.dispatch(setUserId(userId))
        // set access to profile
        store.dispatch(logIn());
        // close Loading
        store.dispatch(setLoading());
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

/**
 * [Edit user name]
 *
 * @param   {String}   firstName     [firstName from input value]
 * @param   {String}   lastName      [lastName from input value]
 */
async function editNewName(firstName, lastName) {
  // Get token
  const token = store.getState().token;
  // Set newName object
  const newName = {
    firstName: firstName,
    lastName: lastName,
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
        // dispatch new name
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        const name = {
          firstName: firstName,
          lastName: lastName,
        };
        store.dispatch(setName(name));
        store.dispatch(setLoading());
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function getTransactions(userId) {

  // get mocked datas
  const mockedData = mockedDatas.filter((data) => data.id === userId);
  const userDatas = mockedData[0].datas;
  return userDatas;
}

export { getAccess, editNewName, getTransactions };
