import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-yyln.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    console.log(data);
    return data.articles;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    console.log(data);
    return data.article;
  });
};

export { getArticles, getArticleById };

// upon reading my previous feed back I decided to refactor and use Axios instead of fetch. (turns out it was good advice :))

// I also ditched the search bar (I may just throw a nav bar in on my next PR)
