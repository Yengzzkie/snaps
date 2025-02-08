import "./Card.scss"
import Tags from "../Tags/Tags";

const Card = ({ props }) => {
  return (
    <div className="card">

      <div className="card__image-container">
        <img src={props.photo} alt={props.photoDescription} />
      </div>

      <div className="card__tags-container">
        {props.tags.map((tag, index) => (
          <Tags key={index} text={tag} />
        ))}
      </div>

    </div>
  );
};

export default Card;
