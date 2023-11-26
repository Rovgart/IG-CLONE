import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage, { fetchUsers } from "./pages/LandingPage";

import MainPage from "./pages/MainPage";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import useLoading from "./customHooks/useLoading";
import Loader from "./pages/Loader";
function App() {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage />, loader: fetchUsers },
    { path: "/Register", element: <RegisterForm /> },
    { path: "/MainPage", element: <MainPage /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
