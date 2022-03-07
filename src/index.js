import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./services/store";

import "./style/main.css";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

import Auth from "./profile/Auth";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <Auth>
                <Profile />
              </Auth>
            }
          />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Navigate to="/error" />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
