export const CommentsCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">Author: {comment.author}</p>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};
