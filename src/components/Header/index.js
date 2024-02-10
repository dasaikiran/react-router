// Write your JS code here
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="wave"
          />
          <p className="image-name">Wave</p>
        </div>

        <ul className="links-container">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
