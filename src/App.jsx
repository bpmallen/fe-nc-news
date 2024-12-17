import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";

import ArticleList from "./Components/ArticleList";
import { Routes, Route, Router } from "react-router-dom";
import ArticlePage from "./Components/ArticlePage";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
