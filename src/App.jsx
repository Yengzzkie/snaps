import "./App.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photos from "./data/photos.json";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Filters from "./components/Filters/Filters";
import Hero from "./components/Hero/Hero";

function App() {
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilteredPhotos(photos.filter((photo) => photo.tags.includes(selectedTag) || selectedTag === null)); // filter the photos based on the selected tag or if no tag is selected set to null to show all photos
  }, [selectedTag]); // use selectedTag as dependency so when it changes, the setFilterdPhotos will update too

  return (
    <>
      {/* pass the isOpen state variable and setIsOpen for navbar to handle the opening of the filter dropdown */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isHome={true} />

      <main>
        <Filters
          isOpen={isOpen}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <div className="container">
          {/* hero section */}
          <Hero />

          <section className={`card-container ${isOpen ? "two-cols" : ""}`}>
            {filteredPhotos.length === 0 ? (
              <p className="no-result-text">No results found</p>
            ) : (
              filteredPhotos.map((photo) => (
                <Link key={photo.id} to={`/${photo.id}`}>
                  <Card props={photo} />
                </Link>
              ))
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
