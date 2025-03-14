import "./App.scss";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";
import axios from "axios";
import PhotosGrid from "./components/PhotosGrid/PhotosGrid";

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [tags, setTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const API_URL = "http://localhost:8080/";
  // const API_KEY = "d89f073e-41b4-4bf8-a990-a74a9ae9ab1d"; // import.meta.env.VITE_API_KEY;

  async function getTags() { // fetch the tags
    try {
      const response = await axios.get(`${API_URL}tags`);
      setTags(response.data);
    } catch (error) {
      console.error("Failed to get tags:", error);
    }
  }

  async function getPhotos() { // fetch the photos
    try {
      const response = await axios.get(`${API_URL}photos`);
      setPhotos(response.data);
    } catch (error) {
      console.error("Failed to get photos:", error);
    }
  }

  useEffect(() => {
    getPhotos();
    getTags();
  }, [selectedTag]);

  return (
    <>
      {/* pass the isOpen state variable and setIsOpen for navbar to handle the opening of the filter dropdown */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isHome={true} />

      <main>
        {/* filter tags */}
        <Filters isOpen={isOpen} selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />

        <div className="container">
          {/* hero section */}
          <Hero />

          {/* photos container */}
          <PhotosGrid photos={photos} isOpen={isOpen} selectedTag={selectedTag} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
