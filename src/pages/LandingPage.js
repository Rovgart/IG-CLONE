import { FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";
import { CiMobile3 } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import jaWyciety from "../assets/Ja_wyciety.png";
import milosz from "../assets/milosz.jpg";
import classes from "./LandingPage.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarouselSlide from "./CarouselSlide";
function LandingPage() {
  const [curSlide, setCurSlide] = useState(0);
  const [users, setUsers] = useState([]);

  const mdScreen = useMediaQuery({
    query: `(min-width:1024px)`,
  });
  const images = [jaWyciety, milosz];
  useEffect(() => {
    const nextSlide = setInterval(() => {
      setCurSlide((prevSt) => (prevSt + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(nextSlide);
    };
  });
  useEffect(() => {
    async function fetchUser() {
      try {
        const fetchedData = await fetch("http://localhost:3000/api/users/1", {
          mode: "no-cors",
        });
        const response = await fetchedData.json();
        setUsers(response);
        console.log(users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className=" grid grid-cols-landing gap-1/2 border relative border-slate-500 items-center h-screen justify-items-center">
      {mdScreen && (
        <CiMobile3
          style={{
            gridColumn: "2/3",
            maxWidth: "130%",
          }}
          size={`${mdScreen ? "35rem" : "8rem"}`}
        />
      )}
      {mdScreen && <CarouselSlide currentSlide={curSlide} images={images} />}
      <LoginForm mdScreen={mdScreen} />
      <footer className="flex items-center gap-3 absolute bottom-0 text-gray-400 tracking-normal italic p-3 text-sm">
        <h2>c0rly-Back-End</h2>
        <h2>rovgart-Front-End</h2>
      </footer>
    </div>
  );
}
export default LandingPage;
