import { useState } from "react";
import { postComment } from "../api/api";

export const NewCommentForm = ({ article_id, addNewComment }) => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !body) {
      setError("Please fill out all fields");
      return;
    }

    setError(null);
    setIsPosting(true);

    postComment(article_id, { username, body })
      .then((newComment) => {
        addNewComment(newComment);
        const url = `articles/${article_id}/comments`;

        setUsername("");
        setBody("");
      })
      .catch((err) => {
        setError("Failed to post comment. Please try again.");
      })
      .finally(() => {
        setIsPosting(false);
      });
  };
  return (
    <div className="new-comment-form">
      <h3>Post a Comment</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">
          {isPosting ? "Posting your comment..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
};
