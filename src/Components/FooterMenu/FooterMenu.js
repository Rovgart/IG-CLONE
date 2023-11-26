import { useContext, useState } from "react";
import FooterItem from "./FooterItem";
import { IoMdHome } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import AddPost from "../Features/AddPost";
import PostContext from "../../store/post-context";
function FooterMenu() {
  const postCtx = useContext(PostContext);
  const [openPost, setOpenPost] = useState(false);
  const mdScreen = useMediaQuery({
    query: "(min-width:720px)",
  });
  const lg = useMediaQuery({
    query: "(min-width:1500px)",
  });
  return (
    <footer
      role="navigation"
      className={`order-1 bottom-0 sticky  bg-white w-screen border border-r flex sm:h-screen sm:sticky sm:top-0 sm:max-w-[5vw] sm:flex sm:flex-col p-2 justify-around gap-5`}
    >
      <IoMdHome size={`${lg ? "3rem" : "1.5rem"}`} />
      <IoIosAddCircleOutline
        size={`${lg ? "3rem" : "1.5rem"}`}
        onClick={() => setOpenPost(true)}
      />
      {openPost && <AddPost />}
      <IoIosSend size={`${lg ? "3rem" : "1.5rem"}`} />
      <div className="w-3/4  ">
        <img
          className="rounded-full w-full h-full object-cover border aspect-square"
          src={postCtx[2].authorImg}
          alt=""
        />
      </div>
    </footer>
  );
}
export default FooterMenu;
