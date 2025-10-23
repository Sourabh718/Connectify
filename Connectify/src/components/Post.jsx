import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import Swal from "sweetalert2";
{/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
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
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
          
            className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={handleButtonClick}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;