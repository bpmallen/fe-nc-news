import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api/api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        const uniqueTopics = [
          ...new Set(articles.map((article) => article.topic)),
        ];
        setTopics(uniqueTopics);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoadingfalse(false);
      });
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (error) return <p>Error loading topics: {error.message}</p>;

  return (
    <div className="topics-nav">
      {topics.map((topic) => (
        <Link key={topic} to={`/topics/${topic}`} className="topic-link">
          {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default Topics;
