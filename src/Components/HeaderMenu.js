import { useContext, useState } from "react";
import MenuContext from "../store/menu-context";
import HeaderMenuItem from "./HeaderMenuItem";
import { MdOutlineDarkMode } from "react-icons/md";
function HeaderMenu({ mdScreen }) {
  const menuCtx = useContext(MenuContext);
  const [dark, setDark] = useState(false);
  const DarkHandler = () => {
    setDark((prev) => !prev);
  };
  return (
    <nav className="flex items-center gap-2">
      {menuCtx.map((item, index) => (
        <HeaderMenuItem key={index} menuItem={item} mdScreen={mdScreen} />
      ))}
      <MdOutlineDarkMode
        color={`${dark ? "black" : "grey"}`}
        onClick={DarkHandler}
        size={`${mdScreen ? "2.2rem" : "1.2rem"}`}
      />
    </nav>
  );
}
export default HeaderMenu;
