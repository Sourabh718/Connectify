import { createContext, use, useEffect, useReducer } from "react";
 
export const PostList = createContext({
  postList: [],
  getPost: ()=>{},
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPost ,action)=>{
  let newPostList = currPost
  if(action.type === 'DELETE_POST'){
    newPostList = currPost.filter(post => action.payload != post.id)
  }
  if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...newPostList];
  }
  if(action.type === 'GET_POST'){
    const allPosts = [...currPost, ...action.payload];
    newPostList = allPosts.filter(
    (post, index, self) => index === self.findIndex((p) => p.id === post.id)
  );
  }
  return newPostList;
}
const PostListProvider = ({children}) =>{
  // const storedPosts = JSON.parse(localStorage.getItem('posts'));
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // useEffect(()=>{
  //   localStorage.setItem('posts', JSON.stringify(postList));
  // }, [postList]);
  const addPost = (postTitle, postContent, postTags) =>{
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: postTitle, 
        body: postContent, 
        tags: postTags,
        reactions:'',
        userId: 'you'
      },
    })
  };
  const getPost = (posts) =>{
    dispatchPostList({
      type:"GET_POST",
      payload:
        posts
      ,
    })
  };
  const deletePost = (postId)=>{
    dispatchPostList({
      type:'DELETE_POST',
      payload:
        postId,
      
    })
  };
  
  return <PostList.Provider value={{postList,getPost, addPost, deletePost}}>
    {children}
  </PostList.Provider>
}

export default PostListProvider;
