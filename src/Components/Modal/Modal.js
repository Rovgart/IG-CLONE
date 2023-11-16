import createPortal from "react-dom";
import PostContext from "../../store/post-context";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const overlays = document.querySelector("#overlays");
const Backdrop = (props) => {
  return <div className="absolute right-0 top-0">{props.children}</div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlays)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlays)}
    </>
  );
};
export default Modal;
