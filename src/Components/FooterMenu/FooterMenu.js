import { useContext } from "react";
import FooterItem from "./FooterItem";
import FooterContext from "../../store/footer-context";
import { useMediaQuery } from "react-responsive";

function FooterMenu() {
  const mdScreen = useMediaQuery({
    query: "min-width:720px",
  });
  const footerCtx = useContext(FooterContext);
  return (
    <footer className="w-screen border-slate-500 border flex absolute sm:h-full sm:w-1/8 sm:top-0 sm:absolute sm:flex sm:flex-col sm:border sm:border-slate-500 p-2 justify-around gap-5">
      <FooterItem footerIcons={footerCtx} mdScreen={mdScreen} />
    </footer>
  );
}
export default FooterMenu;
