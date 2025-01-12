import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../api/api";
import Error from "./Error";
import { CommentsList } from "./CommentsList";
import { VoteCounter } from "./VoteCounter";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    Promise.all([getArticleById(id), getCommentsByArticleId(id)])
      .then(([articleData, commentsData]) => {
        setArticle(articleData);
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (isLoading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (error) return <Error error={error} />;

  return (
    <div className="article-page">
      <h2 className="article-page-title">{article.title}</h2>
      <p className="article-page-author">Author: {article.author}</p>
      <p className="article-page-topic">Topic: {article.topic}</p>
      <p className="article-page-comments">
        Comments 💬 {article.comment_count}
      </p>
      <VoteCounter votes={article.votes} article_id={article.article_id} />
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
        <CommentsList initialComments={comments} article_id={id} />
      </div>
    </div>
  );
};

export default ArticlePage;
