import AddPostModal from "../FooterMenu/AddPostOverlay";
import Modal from "../Modal/Modal";
function AddPost() {
  return (
    <AddPostModal>
      <ul className="list-none flex gap-3 items-center">
        <div></div>
        <li>Default</li>
        <li>Colorful</li>
        <li>Gradient</li>
      </ul>
    </AddPostModal>
  );
}
export default AddPost;
