import "./Filters.scss";
import Tags from "../Tags/Tags";
import tags from "../../data/tags.json";

const Filters = ({ isOpen, selectedTag, getSelectedTag }) => {

    function selectTagHandler(tag) {
        getSelectedTag(tag);
    }

    return (
    <div className="tags__wrapper">
      {isOpen && (
        <div className={`filter__tags-container ${isOpen ? "open" : ""}`}>
          <h2 className="filter__header">Filters</h2>
          <div className="filter__tags">
            {tags.map((tag, index) => (
                // pass the props of tags to the getSelectedTag function
              <div key={index} onClick={() => selectTagHandler(tag)}> 

                {/* add a conditional classname (selected) for selected tags */}
                <Tags
                  text={tag}
                  cn={`clickable-tag ${
                    selectedTag.includes(tag) ? "selected" : ""
                  }`}
                  selected={selectedTag.includes(tag)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
