import "./Card.scss"
import Tags from "../Tags/Tags";

const Card = ({ photo }) => {
  return (
    <div className="card">

      <div className="card__image-container">
        <img src={photo.photo} alt={photo.photoDescription} />
        <span className="card__photographer-name">{photo.photographer}</span>
      </div>

      <div className="card__tags-container">
        {photo.tags.map((tag, index) => (
          <Tags key={index} cn={"non-clickable-tag"} text={tag} />
        ))}
      </div>

    </div>
  );
};

export default Card;
