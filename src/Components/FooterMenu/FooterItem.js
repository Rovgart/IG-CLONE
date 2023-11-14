function FooterItem({ mdScreen, footerIcons }) {
  return (
    <>
      {footerIcons.map((item, index) => (
        <button key={index} className={`${mdScreen ? "text-4xl" : "text-3xl"}`}>
          {item}
        </button>
      ))}
    </>
  );
}
export default FooterItem;
