import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home </Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/projects">Projects </Link></li>
        <li><Link to="/contact">Contact </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;