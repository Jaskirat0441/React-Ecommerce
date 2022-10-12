import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container my-5 text-center">
    <div className="alert alert-success" role="alert">
    <h4 className="alert-heading">404</h4>
    <p>Not Found</p>
    <hr/>
    <p className="mb-0">th epage you are looking doesn't exist. Press below button for Home Page</p>
  </div>
  <Link to="/">
  <button type="button" className="btn btn-info text-white">Home</button>
  </Link>
  </div>
  )
}

export default Error