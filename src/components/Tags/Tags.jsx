import "./Tags.scss";

const Tags = ({ text, cn }) => {
  return (
    <div className={cn}>
      <span>{text}</span>
    </div>
  );
};

export default Tags;
