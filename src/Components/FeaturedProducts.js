import React from "react";
import { useProductContext } from "../Context/productContext";
import Product from "./Product";

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();

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
    <section className="bg-light bg-gradient p-2">
      <div className="container my-5">
        <h4>
          Check Now <span className="badge bg-secondary">Latest</span>
        </h4>
        <div
          className="alert alert-secondary alert-dismissible fade show"
          role="alert"
        >
          <strong>Festival SALE!</strong> You should check in on some of
          Features Products
        </div>
        <div className="row">
        {featuredProducts && featuredProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
