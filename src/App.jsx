import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import ArticlePage from "./Components/ArticlePage";
import Error from "./Components/Error";

function App() {
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
