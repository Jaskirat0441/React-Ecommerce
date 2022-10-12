import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Ecommerce</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
             <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li> 
            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
             {/* <li className="nav-item">
            <Link className="nav-link" to="/cart"><FiShoppingCart/>2</Link>
          </li> */}
        </ul>
        <div className="d-grid gap-0.5 d-md-flex justify-content-md-end">
        <Link className="nav-link" to="/login"><button type="button" className="btn btn-primary btn-sm ">Login</button></Link>
        <Link className="nav-link" to="/cart"><FiShoppingCart/>2</Link>
</div>
        {/* <span className="navbar-text p-0">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            
          </li>
             <li className="nav-item">
           
          </li>
          </ul>
      </span> */}
      </div>
    </div>
  </nav>
  )
}

export default Navbar