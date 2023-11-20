import ReactDOM from "react-dom";
const overlays = document.querySelector("#overlays");
function Backdrop(props) {
  return (
    <div className="absolute backdrop-blur-xl w-screen h-screen">
      {props.children}
    </div>
  );
}

function AddPostOverlay(props) {
  <div className="w-3/4 absolute h-1/4">
    <div>{props.children}</div>
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
