import React from 'react'
import { useProductContext } from "../Context/productContext";
import Product from '../Components/Product';

const Products = () => {
  const { isLoading, products } = useProductContext();

  // console.log()

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-secondary">
  
      <div className=" container p-5  ">
      <div class="alert alert-info alert-dismissible fade show container text-center" role="alert">
  <strong>Check Products</strong> You should check {products.length} in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className="row">
    {products && products.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </div>
    </div>
    </div>
  )
}

export default Products