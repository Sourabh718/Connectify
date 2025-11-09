
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import Spinner from "./Spinner";

const PostList = ({ userId, setPostList, setPostListInApp, filteredPosts })=>{
  const [fetching, setFetching] = useState(false);
  const {postList, getPost} = useContext(PostListData);

  useEffect(()=>{
    setFetching(true);
    fetch('https://dummyjson.com/posts')
     .then(res => res.json())
     .then((res) => {
      getPost(res.posts);
      setFetching(false);
      if (setPostList) setPostList(res.posts); 
      if (setPostListInApp) setPostListInApp(res.posts); 
    });
  }, []
);
const postsToRender = filteredPosts || postList;
return(
<>
{
  fetching && <Spinner />
}
{
  !fetching && postList.length === 0 && <WelcomeMsg />
}
{
  !fetching && (
        <div className="post-container">
          {postsToRender.map((post) => (
            <Post key={`${post.userId}-${post.id}`} post={post} userId={userId} />
          ))}
        </div>
      )
}
</>
)
}
export default PostList;
