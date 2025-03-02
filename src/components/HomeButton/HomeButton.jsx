import "./HomeButton.scss";
import Arrow from "../../assets/images/Arrow.svg?react";
import { Link } from "react-router-dom";

const HomeButton = () => {

  return (
    <Link to="/">
        <button className="home-btn" >
          <Arrow />
          Home
        </button>
    </Link>
  );
};

export default HomeButton;
