import { AiFillInstagram } from "react-icons/ai";
import HeaderImg from "../../assets/header_logo.png";
function HeaderLogo({ mdScreen }) {
  return (
    <div className="flex items-center gap-2 tracking-wide">
      <picture>
        <AiFillInstagram
          color={"black"}
          size={`${mdScreen ? "4rem" : "2rem"}`}
        />
      </picture>
      <h1
        className={`text-xl md:text-3xl
         text-black  font-logoFont`}
      >
        InstaClone
      </h1>
    </div>
  );
}
export default HeaderLogo;
