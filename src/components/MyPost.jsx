import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext} from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const MyPost = ({userId, user})=>{
    const {postList, getPost} = useContext(PostListData);
    const userPosts = postList.filter(post => post.userId === 'you');
    
    return(
        <>
        <div className="container mt-4 " style={{maxWidth: '800px'}}>
      <div className="card shadow-sm p-4 bg-light">
        <div className="d-flex align-items-center mb-3">
          
          <div>
            <h4 className="mb-1">{user.name}</h4>
            <p className="text-muted mb-1">@{user.userId}</p>
            <p className="text-muted">{user.email}</p>
          </div>
        </div>
          <div>
            <h5>{userPosts.length}</h5>
            <p className="text-muted mb-0">Posts</p>
          </div>

        <hr />

        <div className="mt-3">
          <h6>About</h6>
          <p className="text-muted">
            {user.bio || "Hey there! I love sharing my thoughts and stories."}
          </p>
        </div>
        <hr />

        <div className="mt-3">

        <h3>Posts</h3>
        </div>
        
        { 
            userPosts.length === 0 && 
            (
                <center className="mt-5">
                <FaRegCircleUser size={90} />
                <h4 className="mt-3">No Posts Yet!</h4>
                <p className="text-muted mb-6">You haven't created any posts yet. Start sharing your thoughts!</p>
                </center>
            )
        }
        
        
        { <div className="post-container">
        {
            postList.filter(post => post.userId === 'you')
            .map(post=> <Post key={post.id} post={post} userId={userId}/> )
        }
        </div>}
      </div>
    </div>
        </>

    );
}

export default MyPost;