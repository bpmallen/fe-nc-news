import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-author">Author: {article.author}</p>
        <p className="article-topic">Topic: {article.topic}</p>
      </div>
      <Link to={`/article/${article.article_id}`} className="article-image">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.title}
        />
      </Link>
    </li>
  );
};

export default ArticleCard;
