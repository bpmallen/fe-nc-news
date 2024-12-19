import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-yyln.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const updateVote = (article_id, voteChange) => {
  return (
    api
      .patch(`articles/${article_id}`, { inc_votes: voteChange })
      //{ inc_votes: voteChange } - this is the request body
      // I didnt understand where inc_votes came from until looking at my back-end patchVotesByArticleId()
      .then(() => {
        console.log("patch complete");
      })
  );
};

export { getArticles, getArticleById, getCommentsByArticleId, updateVote };

// please forgive my leaving comments, it is for me when I revisit the PR in the future
