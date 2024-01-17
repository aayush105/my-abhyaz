import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" style={{ marginLeft: '50px' }} href="/">
        <img src="/images/logo.png" width="50px" height="50px" alt="Abhyaz Logo" />
        <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>Abhyaz</span>
      </a>
      <div className="collapse navbar-collapse" style={{ marginLeft: '500px' }} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/solution">Solution</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/jobs">Job Opportunities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
