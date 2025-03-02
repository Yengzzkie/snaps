import "./Form.scss";

const Form = ({ postComment, name, setName, comment, setComment }) => {
  return (
    <form className="form-container" onSubmit={postComment}>
      <div className="form__input">
        <label htmlFor="name">Name</label>
        <input
          className={`form__input-name`}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form__input">
        <label htmlFor="comment">Comment</label>
        <textarea
          className={`form__input-comment`}
          name="comment"
          placeholder="Type your comment..."
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="form__submit-btn"
        disabled={true}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
