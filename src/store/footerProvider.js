import FooterContext from "./footer-context";

function FooterProvider() {
  <FooterContext.Provider value={FooterContext}>
    {props.children}
  </FooterContext.Provider>;
}
export default FooterProvider;
