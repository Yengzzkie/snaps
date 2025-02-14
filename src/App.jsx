import "./App.css";
import photos from "./data/photos.json";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [filteredPhotos, setFilteredPhotos] = useState(photos)
  const [selectedTag, setSelectedTag] = useState([]);

  // logic for setting the selected filter tags
  function getSelectedTag(tag) {

    // check if the selected tags already exists in the selectedTag array
    const isExist = selectedTag.includes(tag);

    if (isExist) {
      setSelectedTag(selectedTag.filter((t) => t !== tag)); // if it already exists, remove it from the array by toggling the tag
    } else {
      setSelectedTag([...selectedTag, tag]); // if it doesnt exist yet, add it to the array
    }

  }

  useEffect(() => {
    setFilteredPhotos(photos.filter((photo) => selectedTag.every((tag) => photo.tags.includes(tag)))); // filter the photos based on the selected tags
  }, [selectedTag]) // use selectedTag as dependency so when it changes, the setFilterdPhotos will update too

  return (
    <>
      <Navbar selectedTag={selectedTag} getSelectedTag={getSelectedTag} />
      <main>
        <div>
          <h4 className="hero__header">Our Mission:</h4>
          <p className="hero__content">
            Provide photographers a space to share photos of the neighborhoods
            they cherish,{" "}
            <span className="hero__content-emphasized">
              expressed in their unique style.
            </span>
          </p>
        </div>
        <div className="card-container">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} props={photo} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
