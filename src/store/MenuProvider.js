import MenuContext from "./menu-context";

function MenuProvider() {
  return (
    <MenuContext.Provider value={MenuContext}>
      {props.children}
    </MenuContext.Provider>
  );
}
export default MenuProvider;
