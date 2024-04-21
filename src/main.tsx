<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Account/LogIn.tsx";
>>>>>>> refs/remotes/origin/develop

import SignUp from "./components/Account/SignUp.tsx";
import LoginWithGG from "./components/Account/LoginWithGG.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
<<<<<<< HEAD
    <App />
   </BrowserRouter>

  </Provider>
=======
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logingg" element={<LoginWithGG />} />
    </Routes>
  </BrowserRouter>
>>>>>>> refs/remotes/origin/develop
  // </React.StrictMode>,
);
