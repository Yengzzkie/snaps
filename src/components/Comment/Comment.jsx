import "./Comment.scss";

const Comment = ({ comment }) => {
  return (
    <div key={comment.id} className="comments__wrapper">
      <div className="comments__name-date-container">
        <p className="comments__name">{comment.name}</p>
        <p className="comment__date">
          {new Date(comment.timestamp).toLocaleDateString()}
        </p>
      </div>

      <p className="comments__comment">{comment.comment}</p>
    </div>
  );
};

export default Comment;
