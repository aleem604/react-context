import { createContext, useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "./Components/Header";
import { Main } from "./Components/Main";
import Footer from "./Components/Footer";
import Archive from "./Components/Archives";
import { createRandomPost } from "./Utils/Utils";

export const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
      }}
    >
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}

export default App;
