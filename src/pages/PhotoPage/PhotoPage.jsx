import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

  async function getPhotoData() {
    try {
      const response = await axios.get(`${API_URL}photos/${id}?api_key=${import.meta.env.VITE_API_KEY}`);

      console.log(response.data);
      setPhotoData(response.data);
    } catch (error) {
      console.error({ error });
      throw new Error("Failed to get photo data:", error);
    }
  }

  // fetch photo data on mount
  useEffect(() => {
    getPhotoData();
    console.log(photoData);
  }, []);

  return (
    <div>
      Photo ID: {id}
      {photoData && (
        <div>
          <p>{photoData?.id}</p>
          <img src={photoData.photo} alt={photoData.photoDescription} />
          <p>{photoData.photoDescription}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;
