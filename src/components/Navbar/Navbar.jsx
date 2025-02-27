import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import HomeButton from "../HomeButton/HomeButton";

const Navbar = ({ isOpen, setIsOpen, isHome }) => {
  // logic for opening and closing the filter tags dropdown
  function openFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <h1><Link to={"/"}>Snaps</Link></h1>
      {/* to make the navbar reusable, I added a condition "isHome", if it is true (the current page is HomePage)
      render the Filters Button, otherwise render the Home Button */}
      {isHome ? <Button text={"Filters"} isOpen={isOpen} onClick={openFilter} /> : <HomeButton />}
    </nav>
  );
};

export default Navbar;
