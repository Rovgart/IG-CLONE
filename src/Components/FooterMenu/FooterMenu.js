import { useContext, useState } from "react";
import FooterItem from "./FooterItem";
import FooterContext from "../../store/footer-context";
import { IoMdHome } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import AddPost from "../Features/AddPost";

function FooterMenu() {
  const [openPost, setOpenPost] = useState(false);
  const mdScreen = useMediaQuery({
    query: "min-width:720px",
  });
  const footerCtx = useContext(FooterContext);
  return (
    <footer className=" bottom-0 w-screen border-slate-500 border flex absolute sm:h-full sm:w-1/8 sm:top-0 sm:absolute sm:flex sm:flex-col sm:border sm:border-slate-500 p-2 justify-around gap-5">
      <IoMdHome />
      <IoIosAddCircleOutline onClick={() => setOpenPost(true)} />
      {openPost && <AddPost />}
      <IoIosSend />
    </footer>
  );
}
export default FooterMenu;
