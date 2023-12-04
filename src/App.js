import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage, { fetchUsers } from "../src/pages/LandingPage";

import MainPage from "./pages/MainPage";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import useLoading from "./customHooks/useLoading";
import Loader from "./pages/Loader";
import UserProfile from "./pages/UserProfile/UserProfile";
function App() {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: () => import("./pages/LandingPage"),
      element: <LandingPage />,
      loader: fetchUsers,
    },
    { path: "/Register", element: <RegisterForm /> },
    {
      path: "/MainPage",
      lazy: () => import("./pages/MainPage"),
      element: <MainPage />,
    },
    {
      path: "/User",
      element: <UserProfile />,
      lazy: () => import("./pages/UserProfile/UserProfile"),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
