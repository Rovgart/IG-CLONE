import { FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";
function LandingPage() {
  return (
    <div className="w-1/2 flex flex-col gap-1/2 items-center border border-slate-500 mx-0 m-auto">
      <FaInstagram size={"10rem"} />
      <LoginForm />
    </div>
  );
}
export default LandingPage;
