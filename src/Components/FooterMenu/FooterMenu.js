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
    <footer className="w-screen border-slate-500 border flex absolute bottom-0 p-5 justify-around gap-5">
      <FooterItem footerIcons={footerCtx} mdScreen={mdScreen} />
    </footer>
  );
}
export default FooterMenu;
