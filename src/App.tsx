import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  LazyRouteFunction,
  RouteObject,
} from "react-router-dom";
import LandingPage, { fetchUsers } from "./pages/LandingPage";

import MainPage from "./pages/MainPage";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import RegisterForm from "./pages/RegisterForm/RegisterForm";
import useLoading from "./customHooks/useLoading";
import Loader from "./pages/Loader";
import UserProfile from "./pages/UserProfile/UserProfile";
import { FetchPosts } from "./Components/Post/Post";
function App() {
  const { startLoading, stopLoading, isLoading } = useLoading();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      loader: fetchUsers,
    },
    { path: "/Register", element: <RegisterForm /> },
    {
      path: "/MainPage",
      loader: FetchPosts,
      element: <MainPage />,
    },
    {
      path: "/User",
      element: <UserProfile />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
