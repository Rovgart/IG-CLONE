import { useContext, useEffect, useRef, useState } from "react";
import MenuContext from "../../store/menu-context";
import HeaderMenuItem from "./HeaderMenuItem";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import Likes from "../Likes/Likes";
import User from "../User/User";
import PostContext from "../../store/post-context";
import ModeButton from "./ModeButton/ModeButton";
function HeaderMenu({ mdScreen }) {
  const postCtx = useContext(PostContext);
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const body = document.querySelector("body");
  useEffect(() => {
    const handleOutsideClick = (e) => {
      setOpened(true);
    };
  }, [opened]);

  const menuCtx = useContext(MenuContext);
  const [dark, setDark] = useState(false);
  const DarkHandler = () => {
    setDark((prev) => !prev);
  };
  return (
    <nav className="flex items-center gap-2 ">
      <CiHeart size={"2.5rem"} onClick={() => setOpened(true)} />
      {opened && <Likes ref={ref} />}
    </nav>
  );
}
export default HeaderMenu;
