const ArticleCard = ({ article }) => {
  //   console.log(article);
  return (
    <li className="article-card">
      <p className="article-title">{article.title}</p>
      <div className="article-flex">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.title}
        />
        <p className="article-author">Author: {article.author}</p>
        <p className="article-topic">Topic: {article.topic}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
