import React, { useContext } from "react";
import { usePosts } from "../Contexts/PostContext";

export default function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
