import { CommentsCard } from "./CommentsCard";

export const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.map((comment) => {
        return <CommentsCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};
