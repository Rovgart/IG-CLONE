import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./TypeAnimation.css";
import { Link } from "react-router-dom";
function TypeAnimation(props) {
  return (
    <div
      className={`${
        props.mdScreen
          ? "col-start-2 col-end-3 items-center flex flex-col gap-5"
          : "hidden"
      } `}
    >
      <h1 className={"anim-type anim-text"}>
        c0rly and rovgart presents{" "}
        <span className="italic bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text">
          InstaClone
        </span>
      </h1>
      <div className="flex items-center gap-5 anim-github rounded-xl  text-white px-2 py-3 relative">
        <Link to={"https://github.com/c0rly"} className=" github-item  ">
          <FaGithub size={props.mdScreen ? "3rem" : "5rem"} />
          <h1 className="text-postCont">c0rly</h1>
        </Link>
        <Link to={"https://github.com/rovgart"} className="github-item   ">
          <FaGithub size={props.mdScreen ? "3rem" : "5rem"} />
          <h1 className="text-postCont">rovgart</h1>
        </Link>
      </div>
    </div>
  );
}
export default TypeAnimation;
