import { motion } from "framer-motion";
import classes from "./LandingPage.module.css";
function CarouselSlide(props) {
  return (
    <>
      {props.images.map((img, index) => (
        <motion.img
          animate={{ opacity: props.currentSlide === index ? 1 : 0 }}
          style={{}}
          transition={{ duration: 1.2 }}
          src={img}
          key={index}
          className={`${index === 0 ? classes["ja"] : classes["milosz"]}`}
        ></motion.img>
      ))}
    </>
  );
}
export default CarouselSlide;
