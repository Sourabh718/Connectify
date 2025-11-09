import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);
  const handleSubmit = (event) =>{
    event.preventDefault();
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");
    postTitleElement.current.value = " ";
    postContentElement.current.value = " ";
    postTagsElement.current.value = " ";
    addPost(postTitle, postContent, postTags);
  }
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const postTagsElement = useRef();
    return (
    
   <form className="create-post shadow-lg p-4 rounded-4 bg-white" onSubmit={handleSubmit}>
  <h4 className="text-center mb-4 fw-semibold text-primary">
    ✏️ Create a New Post
  </h4>

  <div className="mb-3">
    <label htmlFor="title" className="form-label fw-semibold">
      Post Title
    </label>
    <input
      type="text"
      ref={postTitleElement}
      className="form-control rounded-3 border-0 shadow-sm"
      id="title"
      placeholder="What's on your mind?"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label fw-semibold">
      Post Content
    </label>
    <textarea
      type="text"
      ref={postContentElement}
      rows="4"
      className="form-control rounded-3 border-0 shadow-sm"
      id="body"
      placeholder="Write something amazing..."
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label fw-semibold">
      Hashtags
    </label>
    <input
      type="text"
      ref={postTagsElement}
      className="form-control rounded-3 border-0 shadow-sm"
      id="tags"
      placeholder="#travel #mood #coding"
    />
  </div>

  <div className="text-center mt-4">
    <button
      type="submit"
      className="btn btn-primary px-4 py-2 rounded-3 fw-semibold post-btn"
    >
      🚀 Post Now
    </button>
  </div>
</form>

  );
};

export default CreatePost;