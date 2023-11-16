import { useContext } from "react";
import PostContext from "../../store/post-context";
import PostItem from "./PostItem";
import MenuContext from "../../store/menu-context";
function Post() {
  const postCtx = useContext(PostContext);
  const menuCtx = useContext(MenuContext);

  return (
    <div className="border h-1/2 border-slate-500 w-full flex-col flex mx-auto m-0 gap-6 p-4">
      {postCtx.map((item) => (
        <PostItem
          key={item.id}
          authorName={item.author}
          authorImg={item.authorImg}
          postTitle={item.postTitle}
          postContent={item.postContent}
          likes={item.likes}
          postType={item.postType}
          buttons={menuCtx}
        />
      ))}
    </div>
  );
}
export default Post;
