import { forwardRef, useContext, useRef, useState } from "react";
import PostContext from "../../store/post-context";
import Modal from "../Modal/Modal";
const Likes = forwardRef(function (props, ref) {
  const postCtx = useContext(PostContext);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Modal onClose={props.onCloseHandler}>
      <div className="flex items-center gap-2">
        <div className="w-16 h-auto  flex justify-end ">
          <img
            className="w-full rounded-full self-end"
            src={postCtx[0].authorImg}
            alt=""
          />
        </div>
        <div className=" w-1/2">
          <p className="text-postUser">
            {postCtx[0].author} lubi Twoje zdjęcie{" "}
          </p>
        </div>
      </div>
    </Modal>
  );
});
export default Likes;
