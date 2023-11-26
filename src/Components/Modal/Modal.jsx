import createPortal from "react-dom";
import PostContext from "../../store/post-context";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { forwardRef } from "react";
const overlays = document.querySelector("#overlays");
const Overlay = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
});
function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlays)}
    </div>
  );
}
export default Modal;
