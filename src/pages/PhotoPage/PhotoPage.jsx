import "./PhotoPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeOutline from "../../assets/images/Like_Outline.svg?react";
import Navbar from "../../components/Navbar/Navbar";
import Tags from "../../components/Tags/Tags";
import axios from "axios";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

  async function getPhotoData() {
    try {
      const response = await axios.get(
        `${API_URL}photos/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      );

      console.log(response.data);
      setPhotoData(response.data);
    } catch (error) {
      console.error({ error });
    }
  }

  // fetch photo data on mount
  useEffect(() => {
    getPhotoData();
    console.log(photoData);
  }, []);

  return (
    <>
      <Navbar />

      <div className="photo-page-container">
        {photoData && (
          <div className="image-card">
            <img src={photoData.photo} alt={photoData.photoDescription} />

            {/* tags container */}
            <div className="tags-container">
              {photoData.tags?.map((tag) => (
                <Tags key={tag.id} text={tag} cn={"non-clickable-tag"} />
              ))}
            </div>

            {/* likes and date container */}
            <div className="likes-date-container">
              <div className="likes">
                <button>
                  <LikeOutline />
                </button>
                <p>{photoData.likes} likes</p>
              </div>
              <p>{new Date(photoData.timestamp).toLocaleDateString()}</p>
            </div>

            {/* photographer name */}
            <p className="photographer-name">Photo by  {photoData.photographer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoPage;
