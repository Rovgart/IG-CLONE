import { useContext } from "react";
import PostContext from "../../store/post-context";
import Modal from "../Modal/Modal";
function Likes() {
  const postCtx = useContext(PostContext);

  return (
    <Modal>
      <div className="flex items-center gap-2">
        <img className="w-1/6 rounded-full" src={postCtx[0].authorImg} alt="" />
        <div className="">
          <p className="text-postUser">
            {postCtx[0].author} lubi Twoje zdjęcie{" "}
          </p>
        </div>
      </div>
    </Modal>
  );
}
export default Likes;
