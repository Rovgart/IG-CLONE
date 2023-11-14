import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/MainPage", element: <MainPage /> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
