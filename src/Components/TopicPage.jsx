import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticlesByTopic } from "../api/api";
import Error from "./Error";

const TopicPage = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticlesByTopic(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <Error error={error} />;

  return (
    <div className="topic-page">
      <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)} Articles</h2>
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopicPage;
