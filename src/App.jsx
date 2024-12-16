import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import ArticleSearch from "./Components/ArticleSearch";
import ArticleList from "./Components/ArticleList";
import { Routes, Route, Router } from "react-router-dom";
import ArticlePage from "./Components/ArticlePage";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <ArticleSearch setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
