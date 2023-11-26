import { useContext } from "react";
import PostContext from "../../store/post-context";
function User() {
  const postCtx = useContext(PostContext);
  return (
    <>
      <img className="rounded-full w-1/12" src={postCtx[2].authorImg} alt="" />
    </>
  );
}
export default User;
