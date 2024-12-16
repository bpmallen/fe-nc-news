import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://my-nc-news-yyln.onrender.com/api/articles")
      .then((response) => {
        return response.json();
      })
      .then((articleData) => {
        console.log(typeof articleData);
        setArticles(articleData.articles);
      });
  }, []);
  return (
    <>
      <h2>Here's a list of great articles you should read!</h2>
      <ul className="article-list">
        {articles.map((article, index) => {
          console.log(article, "im an article");
          return <ArticleCard key={index} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
