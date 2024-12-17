import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../api/api";
import Error from "./Error";
import { CommentsList } from "./CommentsList";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    setIsError(null);

    getArticleById(id)
      .then((data) => {
        setArticle(data);
        return getCommentsByArticleId(id);
        setLoading(false);
      })
      .then((commentsData) => {
        setComments(commentsData);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  // function to extrat the month/day/year and time from article.created_at

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (loading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (isError) return <Error error={error} />;

  return (
    <div className="article-page">
      <h2 className="article-page-title">{article.title}</h2>
      <p className="article-page-author">Author: {article.author}</p>
      <p className="article-page-topic">Topic: {article.topic}</p>
      <p className="article-page-comments">
        Comments 💬 {article.comment_count}
      </p>
      <p className="article-page-posted">
        Posted: {formatDate(article.created_at)}
      </p>

      <img
        className="article-page-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <div className="article-page-body">{article.body}</div>
      <div className="article-comments-list">
        <h3>Comments</h3>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default ArticlePage;
