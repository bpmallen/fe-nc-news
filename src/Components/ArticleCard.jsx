import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <li className="article-card">
      <p className="article-title">{article.title}</p>
      <div className="article-flex">
        <Link to={`/article/${article.article_id}`}>
          <img
            className="article-img"
            src={article.article_img_url}
            alt={article.title}
          />
        </Link>
        <p className="article-author">Author: {article.author}</p>
        <p className="article-topic">Topic: {article.topic}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
