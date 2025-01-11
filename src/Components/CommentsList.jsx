import { CommentsCard } from "./CommentsCard";
import { useState } from "react";
import { deleteComment } from "../api/api";
import { NewCommentForm } from "./NewCommentForm";

export const CommentsList = ({ initialComments, article_id }) => {
  const [comments, setComments] = useState(initialComments);

  const handleDelete = async (comment_id) => {
    try {
      await deleteComment(comment_id);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.comment_id !== comment_id)
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const addNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <div className="comments-list">
      <NewCommentForm article_id={article_id} addNewComment={addNewComment} />
      {comments.map(
        (comment) =>
          comment &&
          comment.comment_id && (
            <CommentsCard
              key={comment.comment_id}
              comment={comment}
              onDelete={(comment_id) => handleDelete(comment_id, setComments)}
            />
          )
      )}
    </div>
  );
};
