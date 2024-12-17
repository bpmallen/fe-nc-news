import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import Error from "./Error";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
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
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (error) return <Error error={error} />;

  return (
    <>
      <>
        <div className="container">
          <h2 className="sub-heading">
            Here's a list of great articles you should read!
          </h2>
          {loading ? (
            <p>Articles loading...</p>
          ) : error ? (
            <p>There has been an Error!!!</p>
          ) : (
            <ul className="article-list">
              {articles.map((article) => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </ul>
          )}
        </div>
      </>
    </>
  );
};

export default ArticleList;
