import "./Filters.scss";
import Tags from "../Tags/Tags";


const Filters = ({ isOpen, selectedTag, setSelectedTag, tags }) => {

    function selectTagHandler(tag) {
      setSelectedTag(selectedTag === tag ? null : tag); // this condition is to check if the selected tag is the same as the tag clicked, if it is then set to null to toggle off the selected tag
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
                    selectedTag === tag ? "selected" : ""
                  }`}
                  selected={selectedTag}
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