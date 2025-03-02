import "./PhotoPageCard.scss";
import LikeOutline from "../../assets/images/Like_Outline.svg?react";
import Tags from "../Tags/Tags";

const PhotoPageCard = ({ photoData }) => {
  return (
    <div className="image-card">
      <img src={photoData.photo} alt={photoData.photoDescription} />

      {/* tags container */}
      <div className="tags-container">
        {photoData.tags?.map((tag) => (
          <Tags key={tag} text={tag} cn={"non-clickable-tag"} />
        ))}
      </div>

      {/* likes and date section */}
      <div className="likes-date-container">
        <div className="likes">
          <button>
            <LikeOutline />
          </button>
          <p>{photoData.likes} likes</p>
        </div>

        <p className="photographer-name">Photo by {photoData.photographer}</p>

        <p className="date">{new Date(photoData.timestamp).toLocaleDateString()}</p>
      </div>

      {/* photographer name */}
      {/* <p className="photographer-name">Photo by {photoData.photographer}</p> */}
    </div>
  );
};

export default PhotoPageCard;
