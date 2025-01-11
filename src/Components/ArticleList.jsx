import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import Error from "./Error";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((articleData) => {
        setArticles(articleData);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (error) return <Error error={error} />;

  return (
    <>
      <>
        <div className="container">
          <ul className="article-list">
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </div>
      </>
    </>
  );
};

export default ArticleList;
