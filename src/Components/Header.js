import { AiFillInstagram } from "react-icons/ai";
import HeaderLogo from "../assets/header_logo.png";
import { useMediaQuery } from "react-responsive";
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  const mdScreen = useMediaQuery({
    query: `(min-width:720px)`,
  });
  return (
    <header className={`p-4 border border-b flex justify-around items-center`}>
      <div className="flex items-center gap-2 tracking-wide">
        <picture>
          <AiFillInstagram
            color={"black"}
            size={`${mdScreen ? "4rem" : "2rem"}`}
          />
        </picture>
        <h1
          className={` ${
            mdScreen ? "text-2xl" : "text-lg"
          } text-black  font-logoFont`}
        >
          InstaClone
        </h1>
      </div>
      <div>
        <HeaderMenu mdScreen={mdScreen} />
      </div>
    </header>
  );
};

export default Header;
