import { useContext, useState } from "react";
import MenuContext from "../store/menu-context";
import HeaderMenuItem from "./HeaderMenuItem";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import Likes from "./Likes/Likes";

function HeaderMenu({ mdScreen }) {
  const [opened, setOpened] = useState(false);
  const menuCtx = useContext(MenuContext);
  const [dark, setDark] = useState(false);
  const DarkHandler = () => {
    setDark((prev) => !prev);
  };
  return (
    <nav className="flex items-center gap-2">
      <CiHeart onClick={() => setOpened((prev) => !prev)} />
      {opened && <Likes />}
      <FiMessageCircle />
    </nav>
  );
}
export default HeaderMenu;
