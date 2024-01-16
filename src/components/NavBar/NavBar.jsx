import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/event">event</Link>
      <Link to="/contact">contact</Link>
      <Link to="/certificate">certificate</Link>
      <Link to="/xyg">xyg</Link>
      {/* Add other navigation links */}
    </div>
  );
};

export default NavBar;