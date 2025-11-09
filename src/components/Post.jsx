import { useState, useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import Swal from "sweetalert2";
const Post = ({post, userId}) => {
  const { deletePost } = useContext(PostList);
  let [showComment, setShowComment] = useState(false);
  let [comment, setComment] = useState("");
  let [reactions, setReactions] = useState(post.reactions.likes || '');
  let [liked, setLiked] = useState(false);
const handleButtonClick = () => {
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won’t be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        deletePost(post.id)
                    }
                });
}
  return (
   
    
    <div key={`${post.userId}-${post.id}`} className="post-card shadow-sm bg-light">
      
  <div className="post-header d-flex justify-content-between align-items-start">
    <div>
      <h5 className="fw-semibold text-dark mb-1">{post.title}</h5>
      <small className="text-muted">@{post.userId}</small>
    </div>
   
      {
        userId == 'you' &&
        (
          <button
            className="btn btn-sm delete-btn"
            onClick={handleButtonClick}
            title="Delete Post"
          >
            <AiFillDelete size={20} />
          </button> )
      }
  </div>

  <p className="post-body mt-3 mb-3">{post.body}</p>

  <div className="tags mb-3">
    {post.tags.map((tag) => (
      <span key={tag} className="badge tag-badge me-2">
        #{tag}
      </span>
    ))}
  </div>

  <div className="post-footer d-flex justify-content-between align-items-center">
    <div className="reactions" onClick={()=>{
      if(liked){
        setLiked(false)
        setReactions(reactions-1)
      }
      else{
        setLiked(true)
        setReactions(reactions+1)
      }}} 
      style={{
        cursor: "pointer",
        color:liked?"red":"black",
        }}>
      {liked ?(<i className="fa-solid fa-heart text-danger"> </i>): <i className="fa-regular fa-heart"></i>} <strong>{reactions}</strong>
    </div>
    
    {!showComment && <button className="btn btn-light btn-sm rounded-pill shadow" onClick={()=>setShowComment(!showComment)}>
      💬 Comment 
    </button>}
    {showComment && (
  <div className="mt-3">
    <textarea
      className="form-control"
      rows="2"
      placeholder="Write a comment..."
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
    <button 
      className="btn btn-sm btn-primary mt-2"
      onClick={() => {
        if (comment.trim()) {
          alert(`Comment added: ${comment}`);
          setComment("");
          setShowComment(false);
        }
      }}
    >
      Post Comment
    </button>
    {showComment ? (<button className="btn btn-light btn-sm mt-1 shadow-sm " onClick={()=>setShowComment(!showComment)}>
      ❌
    </button>
    ) : null}
  </div>
)}

  </div>
</div>

    
  );
};

export default Post;