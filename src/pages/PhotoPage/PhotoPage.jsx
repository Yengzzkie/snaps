import "./PhotoPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeOutline from "../../assets/images/Like_Outline.svg?react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Tags from "../../components/Tags/Tags";
import axios from "axios";
import Comment from "../../components/Comment/Comment";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [comments, setComments] = useState([]);
  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com/";

  // function to get the comments for the photo
  async function getComments() {
    try {
      const response = await axios.get(
        `${API_URL}photos/${id}/comments?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to get comments:", error);
    }
  }

  // function to get the photo data
  async function getPhotoData() {
    try {
      const response = await axios.get(
        `${API_URL}photos/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      );
      // console.log(response.data);
      setPhotoData(response.data);
    } catch (error) {
      console.error("Failed to get photo data:", error);
    }
  }

  // fetch photo data on mount
  useEffect(() => {
    getPhotoData();
    getComments();
    console.log(photoData, comments);
  }, []);

  return (
    <>
      <Navbar />

      {/* photo card container */}
      <div className="photo-page-container">
        {photoData && (
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
              <p>{new Date(photoData.timestamp).toLocaleDateString()}</p>
            </div>

            {/* photographer name */}
            <p className="photographer-name">
              Photo by {photoData.photographer}
            </p>
          </div>
        )}
      </div>

      {/* comments section */}
      <div>
        {comments && (
          <div className="comments-container">
            {/* if the comments is greater than one render Comments otherwise Comment */}
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
        )}
      </div>

      <Footer />
    </>
  );
};

export default PhotoPage;
