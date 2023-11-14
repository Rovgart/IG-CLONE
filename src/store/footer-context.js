import { createContext } from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const FooterContext = createContext([
  <IoMdHome />,
  <IoIosAddCircleOutline />,
  <IoIosSend />,
]);
export default FooterContext;
