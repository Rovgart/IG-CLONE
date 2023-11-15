import { FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";
import { CiMobile3 } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
function LandingPage() {
  const mdScreen = useMediaQuery({
    query: `(min-width:1024px)`,
  });
  return (
    <div className=" grid grid-cols-landing gap-1/2 p-4 items-center border border-slate-500 h-screen justify-items-center">
      {mdScreen && (
        <CiMobile3
          style={{ gridColumn: "2/3" }}
          size={`${mdScreen ? "30rem" : "8rem"}`}
        />
      )}
      <LoginForm mdScreen={mdScreen} />
    </div>
  );
}
export default LandingPage;
