import { createContext } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const MenuContext = createContext([
  <CiHeart size={"2rem"} />,
  <FiMessageCircle size={"2rem"} />,
]);
export default MenuContext;
