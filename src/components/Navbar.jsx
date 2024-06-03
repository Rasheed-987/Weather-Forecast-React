import "./navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  
const navbarBrandStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
    color:'white'    
};
const navbarPicture = {
    maxWidth: '10px',
    height: 'auto',
};
  return (
      <nav  className="navbar navbar-expand-lg  navbar-custom">
          <div className="container-fluid">
              <a 
               style={navbarBrandStyle} className="navbar-brand" href="">
              < img
                src="./logo.png"
                style={navbarPicture}
                alt=""
              />
                Weather Forecast</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{ color: 'white'}}/>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <a  className="nav-link" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Services</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
