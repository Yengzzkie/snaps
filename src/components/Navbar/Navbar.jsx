import "./Navbar.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
  
  // logic for opening and closing the filter tags dropdown
  function openFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <h1><Link to={"/"}>Snaps</Link></h1>
      <Button text={"Filters"} isOpen={isOpen} onClick={openFilter} />
    </nav>
  );
};

export default Navbar;
