import React from 'react'
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;

  return (
          <div className="col-12 col-md-4 my-3 ">
    <NavLink to={`/singleproduct/${id}`} style={{textDecoration:"none"}}>

    <div className="card" style={{width:"18rem"}}>
    <img src={image} className="card-img-top" alt="..."/>
    <span className="badge bg-secondary">{category}</span>
    <div className="card-body d-flex justify-content-between">
    <h5 className="card-title">{name}</h5>
    <h5 className="card-title">${price}</h5>
    </div>
  </div>
  </NavLink>
  </div>
  )
}

export default Product