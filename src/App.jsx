import "./App.css";
import { useState } from "react"; // Correct import for useState
import Header from "./Components/Header"; // Default import
import ArticleSearch from "./Components/ArticleSearch"; // Default import
import ArticleList from "./Components/ArticleList"; // Default import

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <ArticleSearch setSearchTerm={setSearchTerm} />
      <ArticleList />
    </>
  );
}

export default App;
