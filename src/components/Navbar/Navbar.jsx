import "./Navbar.scss";
import { useState } from "react";
import Button from "../Button/Button";
import tags from "../../data/tags.json";
import Tags from "../Tags/Tags";

const Navbar = ({ selectedTag, getSelectedTag }) => {
  const [isOpen, setIsOpen] = useState(false);

  // logic for opening and closing the filter tags dropdown
  function openFilter() {
    setIsOpen(!isOpen);
  }
  function selectedTagHandler(tag) {
    getSelectedTag(tag);
  }

  return (
    <>
      <nav>
        <h1>Snaps</h1>
        <Button text={"Filters"} isOpen={isOpen} onClick={openFilter} />
      </nav>

      {isOpen && (
        <div className={`filter__tags-container ${isOpen ? "open" : ""}`}>
          <h2 className="filter__header">Filters</h2>
          <div className="filter__tags">
            {tags.map((tag, index) => (
              <div
                key={index}
                onClick={() => selectedTagHandler(tag)}
                className={`tag ${selectedTag.includes(tag) ? "selected" : ""}`}
              >
                <Tags text={tag} selected={selectedTag.includes(tag)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
