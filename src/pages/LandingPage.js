import { FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";
import { CiMobile3 } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import jaWyciety from "../assets/Ja_wyciety.png";
import milosz from "../assets/milosz.png";
import classes from "./LandingPage.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarouselSlide from "./CarouselSlide";
import TypeAnimation from "./TypeAnimation";
import useLoading from "../customHooks/useLoading";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";

// Fetching Users
export const fetchUsers = async () => {
  const resp = await fetch("http://localhost:3000/api/users");
  const users = await resp.json();
  return users;
};

function LandingPage() {
  const [curSlide, setCurSlide] = useState(0);
  const mdScreen = useMediaQuery({
    query: `(min-width:1024px)`,
  });
  const users = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  console.log(users);
  return (
    <div className=" grid grid-cols-landing gap-1/2 border relative border-slate-500 items-center h-screen justify-items-center">
      <TypeAnimation mdScreen={mdScreen} />
      <LoginForm
        mdScreen={mdScreen}
        username={users.email}
        password={users.password}
      />
      <footer className="flex items-center gap-3 absolute bottom-0 text-gray-400 tracking-normal italic p-3 text-sm">
        <h2>c0rly-Back-End</h2>
        <h2>rovgart-Front-End</h2>
      </footer>
    </div>
  );
}
export default LandingPage;
