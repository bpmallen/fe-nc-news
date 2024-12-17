import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/api";
import Error from "./Error";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setLoading(true);
    getArticleById(id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (isError) return <Error error={error} />;

  return (
    <div className="article-page">
      <h2 className="article-page-title">{article.title}</h2>
      <img
        className="article-page-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article-page-author">Author: {article.author}</p>
      <p className="article-page-topic">Topic: {article.topic}</p>
      <div className="article-page-body">{article.body}</div>
    </div>
  );
};

export default ArticlePage;
