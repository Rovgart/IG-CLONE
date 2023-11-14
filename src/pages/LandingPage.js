import { FaInstagram } from "react-icons/fa";
import LoginForm from "./LoginForm";
function LandingPage() {
  return (
    <div className="flex flex-col mx-0 m-auto">
      <FaInstagram size={"10rem"} />
      <LoginForm />
    </div>
  );
}
export default LandingPage;
