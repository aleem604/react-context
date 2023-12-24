import React, { useContext } from "react";
import { PostContext } from "../Contexts/PostContext";

export default function Results() {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
