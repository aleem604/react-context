import { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import { Main } from "./Components/Main";
import Footer from "./Components/Footer";
import Archive from "./Components/Archives";
import { PostProvider } from "./Contexts/PostContext";

export const PostContext = createContext();

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <PostProvider>
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
    </PostProvider>
  );
}

export default App;
