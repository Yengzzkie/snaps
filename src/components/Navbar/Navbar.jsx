import "./Navbar.scss";
import { useState } from "react";
import Button from "../Button/Button";
import tags from "../../data/tags.json";
import Tags from "../Tags/Tags";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <h1>Snaps</h1>
        <Button text={"Filters"} onClick={openFilter} />
      </nav>

      <div className={`filter__tags-container ${isOpen ? "open" : ""}`}>
        <h2 className="filter__header">Filters</h2>
        <div className="filter__tags">
          {tags.map((tag, index) => (
            <Tags key={index} text={tag} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
