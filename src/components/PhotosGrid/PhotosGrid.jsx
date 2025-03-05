import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./PhotosGrid.scss";

const PhotosGrid = ({ photos, selectedTag, isOpen }) => {
  return (
    <section className={`card-container ${isOpen ? "two-cols" : ""}`}>
      {photos?.length === 0 ? (<p className="no-result-text">No results found</p>) : (
        photos?.filter((photo) => photo.tags.includes(selectedTag) || selectedTag === null).map((photo) => ( // directly filter the photos based on the selected tag as per feedback
          <Link key={photo.id} to={`/${photo.id}`}>
            <Card photo={photo} />
          </Link>
          )
        )
      )}
    </section>
  );
};

export default PhotosGrid;
