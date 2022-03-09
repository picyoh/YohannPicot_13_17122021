import axios from "axios";
import { store, setLoading } from "./store";

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
        store.dispatch({ type: "logIn" });
        store.dispatch({ type: "token", payload: token });
        // Load profile
        loadProfile(token);
        return true;
      }
    })
    .catch(err => {  
      store.dispatch(setLoading());
      alert('wrong username or password');
      console.log(err)  
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
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        const name = {
          firstName: firstName,
          lastName: lastName,
        };
        store.dispatch({ type: "name", payload: name });
        // set access to profile
        // close Loading
        store.dispatch(setLoading());
      }
    })
    .catch(err => {  
      console.log(err)  
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
        const firstName = response.data.body.firstName;
        const lastName = response.data.body.lastName;
        const name = {
          firstName: firstName,
          lastName: lastName,
        };
        store.dispatch({ type: "name", payload: name });
        store.dispatch(setLoading());
      }
    })
    .catch(err => {  
      console.log(err)  
    });  
}

function getTransactions(firstName) {
  // fake Auth
  let id;
  if (firstName === "Tony") {
    id = "12";
  } else {
    id = "13";
  }
  // get mocked datas
  const user = mockedDatas.filter((data) => data.id === id);
  const userDatas = user[0].datas;
  return userDatas;
}

export { getAccess, editNewName, getTransactions };
