import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();
  console.log(useParams());
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://my-nc-news-yyln.onrender.com/api/articles/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.article);
        setArticle(data.article);
      });
  }, [id]); // this fetches the article if the id changes

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="article-title">{article.title}</h2>
      <img
        className="article-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="article-author">Author: {article.author}</p>
      <p className="article-topic">Topic: {article.topic}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticlePage;
