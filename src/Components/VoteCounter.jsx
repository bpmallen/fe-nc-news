import { useState } from "react";
import { updateVote } from "../api/api";

export const VoteCounter = ({ votes, article_id }) => {
  const [count, setCount] = useState(votes);

  const handleVote = (countChange) => {
    setCount((prevCount) => {
      return prevCount + countChange;
    });
    updateVote(article_id, countChange).catch((error) => {
      setCount((prevCount) => {
        return prevCount - countChange;
      });
    });
  };

  return (
    <div className="vote-counter">
      <p className="vote-count">Votes: {count}</p>
      <div className="vote-buttons">
        <button
          className="upvote-button"
          onClick={() => {
            return handleVote(1);
          }}
        >
          👍
        </button>
        <button
          className="downvote-buton"
          onClick={() => {
            return handleVote(-1);
          }}
        >
          👎
        </button>
      </div>
    </div>
  );
};
