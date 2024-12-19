import { useState } from "react";
import { updateVote } from "../api/api";

export const VoteCounter = ({ votes, article_id }) => {
  console.log("current article votes", votes);
  const [count, setCount] = useState(votes);

  const handleVote = (countChange) => {
    setCount((prevCount) => {
      /* When you pass a function to setCount, React automatically provides the most up-to-date value of count as the argument to that function. The argument is what we see as prevCount */
      return prevCount + countChange;
    });
    updateVote(article_id, countChange).catch((error) => {
      console.log(error);
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
            // this is wrapped in an arrow function to prevent immediate invocation as it requires an argument of 1
            // apologies, the comment is for me when I learn something new :)
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
