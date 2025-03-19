import "./PhotoPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Form from "../../components/Form/Form";
import PhotoPageCard from "../../components/PhotoPageCard/PhotoPageCard";
import CommentsSection from "../../components/CommentsSection/CommentsSection";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const API_URL = import.meta.env.VITE_API_URL; // VITE_API_URL=http://localhost:8080/

  // function to get the comments for the photo
  async function getComments() {
    try {
      const response = await axios.get(
        `${API_URL}photos/${id}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Failed to get comments:", error);
    }
  }

  // function to get the photo data
  async function getPhotoData() {
    try {
      const response = await axios.get(
        `${API_URL}photos/${id}`
      );
      setPhotoData(response.data);
    } catch (error) {
      console.error("Failed to get photo data:", error);
    }
  }

  // function to post a comment
  async function postComment(e) {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}photos/${id}/comments`, { name,comment });

      getComments(); // fetch the comments again to update the UI
      setName(""); // clear the name input
      setComment(""); // clear the comment
    } catch (error) {
      console.error("Failed to post comment:", error);
      // display an error if the comment is less than 3 characters
      if (error.status === 400) {
        setErrorMessage(error.response?.data?.message)
      }
    }
  }

  // fetch photo data and comments on mount
  useEffect(() => {
    getPhotoData();
    getComments();
  }, []);

  return (
    <>
      <Navbar />

      {/* photo card container */}
      <div className="photo-page-container">
        {photoData && <PhotoPageCard photoData={photoData} />}
      </div>

      {/* Form section */}
      <Form
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
        postComment={postComment}
        error={errorMessage}
        setError={setErrorMessage}
      />
      

      {/* comments section */}
      <div>{comments && <CommentsSection comments={comments} />}</div>

      <Footer />
    </>
  );
};

export default PhotoPage;
