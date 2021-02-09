
// import './App.css';
import {
 
  Link
} from "react-router-dom";
const Navbar=()=> {
  return (
    <div className="Navbar">
      <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
        <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
        <Link to="/profil">Developers</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
        </li>
        <li>
        <Link to="/loging">Login</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;