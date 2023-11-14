import { createContext } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const MenuContext = createContext([<CiHeart />, <FiMessageCircle />]);
export default MenuContext;
