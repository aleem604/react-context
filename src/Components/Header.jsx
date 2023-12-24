import React, { useContext } from "react";
import Results from "./Result";
import { SearchPosts } from "./SearchPosts";
import { PostContext } from "../Contexts/PostContext";

export default function Header() {
  var { onClearPosts } = useContext(PostContext);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
