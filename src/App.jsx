import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import MyPost from "./components/MyPost";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home")
  const userId = 'you'
  const [postList, setPostList] = useState([]);
  const [postListInApp, setPostListInApp] = useState([]);
  const [searchUserId, setSearchUserId] = useState("")
  const filteredPosts = searchUserId
  ? postListInApp.filter(post => post.userId.toString().includes(searchUserId))
  : postListInApp;
  
  const currentUser = {
    userId: "you",
    name: "Sourabh Tripathi",
    email: "sourabh@gmail.com",
    bio: "A creative blogger who loves sharing ideas.",
    profilePic: "https://via.placeholder.com/120",
  };

  return (
    <PostListProvider>
     <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header searchUserId={searchUserId} setSearchUserId={setSearchUserId}></Header>
          {
            selectedTab === "Home" ? (<PostList 
              userId={""} 
              setPostList={setPostList} 
              setPostListInApp={setPostListInApp} 
              filteredPosts={filteredPosts} 
              />)              
            : selectedTab === "Create Post" ? (<CreatePost></CreatePost>) 
            : (<MyPost userId={userId} user={currentUser}></MyPost>)
          }
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
  );
}
export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import CreatePost from "./components/CreatePost";
// import PostList from "./components/PostList";
// import MyPost from "./components/MyPost";
// import { useState } from "react";
// import PostListProvider from "./store/post-list-store";

// function App() {
//   const [selectedTab, setSelectedTab] = useState("Home");
//   const userId = "you";

//   const currentUser = {
//     userId: "you",
//     name: "Sourabh Tripathi",
//     email: "sourabh@gmail.com",
//     bio: "A creative blogger who loves sharing ideas.",
//     profilePic: "https://via.placeholder.com/120",
//   };

//   const [postList, setPostList] = useState([]); // all posts
//   const [postListInApp, setPostListInApp] = useState([]); // for filtering
//   const [searchUserId, setSearchUserId] = useState("");

//   // Filter posts by searchUserId
//   const filteredPosts = searchUserId
//     ? postListInApp.filter((post) =>
//         post.userId.toString().includes(searchUserId)
//       )
//     : postListInApp;

//   return (
//     <PostListProvider>
//       <div className="app-container">
//         <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//         <div className="content">
//           <Header
//             searchUserId={searchUserId}
//             setSearchUserId={setSearchUserId}
//           />
//           {selectedTab === "Home" ? (
//             <PostList
//               userId={""}
//               setPostList={setPostList}
//               setPostListInApp={setPostListInApp}
//               filteredPosts={filteredPosts}
//             />
//           ) : selectedTab === "Create Post" ? (
//             <CreatePost />
//           ) : (
//             <MyPost userId={userId} user={currentUser} />
//           )}
//           <Footer />
//         </div>
//       </div>
//     </PostListProvider>
//   );
// }

// export default App;
