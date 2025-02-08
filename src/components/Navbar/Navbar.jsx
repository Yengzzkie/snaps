import "./Navbar.scss"
import Button from "../Button/Button"

const Navbar = () => {
  return (
    <nav>
      <h1>Snaps</h1>
      <Button text={"Filters"} />
    </nav>
  );
};

export default Navbar;
