import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import {store} from './store/Store'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Layout from "./Components/Layout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<Layout/>}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route index element={<Login />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>
    )
  )
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
