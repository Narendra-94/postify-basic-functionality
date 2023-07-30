import React from "react";
import ReactDOM from "react-dom/client";
import { PostProvider } from "./context/PostContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Posts } from "./component/pages/post/Posts";
import { CreatePost } from "./component/pages/createPost/CreatePost";
import "./App.css";

import { PostDetails } from "./component/pages/postDetails/PostDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/postDetail/:postId" element={<PostDetails />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <PostProvider>
      <App />
    </PostProvider>
  </Router>
);
