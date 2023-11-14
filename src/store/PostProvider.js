import { useContext } from "react";
import PostContext from "./post-context";
const postCtx = useContext(PostContext);
function PostProvider() {
  return (
    <PostContext.Provider value={PostContext}>
      {props.children}
    </PostContext.Provider>
  );
}
