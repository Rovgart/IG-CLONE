import ReactDOM from "react-dom";
import classes from "./AddPostOverlay.module.css";
const overlays = document.querySelector("#overlays");
function Backdrop(props) {
  return <div className={classes.backdrop}>{props.children}</div>;
}

function AddPostOverlay(props) {
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>;
}

function AddPostModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, overlays)}
      {ReactDOM.createPortal(
        <AddPostOverlay>{props.children}</AddPostOverlay>,
        overlays
      )}
    </>
  );
}
export default AddPostModal;
