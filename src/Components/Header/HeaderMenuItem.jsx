function HeaderMenuItem(props) {
  return (
    <li className={` list-none`}>
      <p className={`${props.mdScreen ? "text-4xl" : "text-xl"}`}>
        {props.menuItem}
      </p>
    </li>
  );
}
export default HeaderMenuItem;
