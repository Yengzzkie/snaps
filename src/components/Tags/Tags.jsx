import "./Tags.scss";

const Tags = ({ text }) => {
  return (
    <div className="tag">
      <span>{text}</span>
    </div>
  );
};

export default Tags;
