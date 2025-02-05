import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-yyln.onrender.com/api",
});

const getArticles = ({ sort_by = "created_at", limit = 10, page = 1 } = {}) => {
  return api
    .get("/articles", { params: { sort_by, limit, page } })
    .then(({ data }) => {
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
  return api
    .patch(`articles/${article_id}`, { inc_votes: voteChange })
    .then(() => {});
};

const postComment = (article_id, commentData) => {
  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then(({ data }) => {
      return data.comment;
    });
};

const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then(({ data }) => {});
};

const getArticlesByTopic = (topic) => {
  return api.get(`articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  updateVote,
  postComment,
  deleteComment,
  getArticlesByTopic,
};

// please forgive my leaving comments, it is for me when I revisit the PR in the future
