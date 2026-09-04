import React from 'react'

const Navbar = () => {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold text-success fs-3" href="#">
          Shop<span className="text-white">Vibe</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shopvibeNavbar"
          aria-controls="shopvibeNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="shopvibeNavbar">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Popular Deals</a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-lg-3 mb-2 mb-lg-0" role="search">
            <input
              className="form-control me-2 rounded-pill px-3"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success rounded-pill px-3" type="submit">
              Search
            </button>
          </form>

          {/* Cart Icon & Badge */}
          <button className="btn btn-success rounded-pill position-relative px-3 mt-2 mt-lg-0">
            Cart
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span> */}
          </button>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar
