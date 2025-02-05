import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import Error from "./Error";
import { useSearchParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort_by") || "created_at";
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;

  useEffect(() => {
    getArticles({ sort_by, page, limit })
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
  }, [searchParams]);

  const handleSortChange = (e) => {
    setSearchParams({ sort_by: e.target.value, page: 1, limit });
  };

  const handleNextPage = () => {
    setSearchParams({ sort_by, page: page + 1, limit });
  };

  const handlePrevPage = () => {
    setSearchParams({ sort_by, page: Math.max(page - 1, 1), limit });
  };

  if (isLoading) {
    return <div className="loading-container">Loading, please wait...</div>;
  }

  if (error) return <Error error={error} />;

  return (
    <>
      <div className="container">
        <div className="sort-controls">
          <fieldset>
            <legend>Sort by:</legend>
            <label>
              <input
                type="radio"
                name="sort_by"
                value="created_at"
                checked={sort_by === "created_at"}
                onChange={handleSortChange}
              />
              Date
            </label>
            <label>
              <input
                type="radio"
                name="sort_by"
                value="comment_count"
                checked={sort_by === "comment_count"}
                onChange={handleSortChange}
              />
              Comment Count
            </label>
            <label>
              <input
                type="radio"
                name="sort_by"
                value="votes"
                checked={sort_by === "votes"}
                onChange={handleSortChange}
              />
              Votes
            </label>
          </fieldset>
        </div>
        <ul className="article-list">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
