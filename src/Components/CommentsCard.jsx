export const CommentsCard = ({ comment, onDelete }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">Author: {comment.author}</p>
      <p className="comment-body">{comment.body}</p>
      <button onClick={() => onDelete(comment.comment_id)}>
        DeleteComment
      </button>
    </div>
  );
};
