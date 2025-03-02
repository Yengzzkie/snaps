import "./CommentsSection.scss";
import Comment from "../Comment/Comment";

const CommentsSection = ({ comments }) => {
  return (
    <div className="comments-container">
      {/* if the comments is greater than one render 'Comments' otherwise 'Comment' */}
      <p className="comments__comment-count">
        {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
      </p>
      {/* sort the comments from newest to oldest */}
      {comments
        .sort((a, b) => b.timestamp - a.timestamp)
        // then map the sorted comments
        .map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentsSection;
