import React, { useState, useEffect } from "react";
import "../styles.css";

import CarD from "./Card";
import { loadCart } from "./helper/carthelper";
import { Link } from "react-router-dom";
import PaymentB from "./payment";


const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product, index) => (
          <CarD
            key={index}
            product={product}
            removefromcart={true}
            addtocart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };


  return (
    <div className="container">
      <div className="row text-center  col-12">
        <div className=" col-12 col-md-5 ">{products.length>0?loadAllProducts(products):
        (<h3 className="text-warning signupt mt-5 p-4" >Your shopping cart is waiting 
        give it purpose-fill it with your favourite Tshirts<br/>
        <Link to ="/home" className="btn btn-outline btn-info text-white mt-5">Continue Shopping</Link></h3>)}</div>
        <div className="col-6"> <PaymentB products={products} setReload={setReload}/></div>
      </div>
    </div>
  );
};

export default Cart;
