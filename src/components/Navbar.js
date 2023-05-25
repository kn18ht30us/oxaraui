import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          Zecco
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recipe box
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={'/'}>Recipe 1</a></li>
                <li><a className="dropdown-item" href={'/'}>Recipe 2</a></li>
                <li><a className="dropdown-item" href={'/'}>Recipe 3</a></li>
                <li><a className="dropdown-item" href={'/'}>Recipe 4</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={'/'}>Fruit</a></li>
                <li><a className="dropdown-item" href={'/'}>Vegetables</a></li>
                <li><a className="dropdown-item" href={'/'}>Eggs</a></li>
                <li><a className="dropdown-item" href={'/'}>Milk</a></li>
                <li><a className="dropdown-item" href={'/'}>Meat</a></li>
                <li><a className="dropdown-item" href={'/'}>Fresh drinks</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={'/'}>About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={'/'}>Visit us</a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <a className="btn btn-link text-dark text-decoration-none" href={'/'}>Log In</a>
            <button className="btn btn-outline-dark rounded-0" type="submit">Create Account</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar