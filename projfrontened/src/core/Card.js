import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { additemtocart, removeItemFromCart } from './helper/carthelper';
import Imghelper from './helper/Imagehelper';

const CarD = ({product,addtocart=true,removefromcart=false,setReload=f=>f
  ,reload=undefined}) => {
  const cartTitle= product?product.name:"a photo from pexels"
  const cartDescription= product?product.description:"Default description"
  const cartPrice= product?product.price:"DEFAULT "
  const [redirect,setRedirect]=useState(false)
    
  const getARedirect=(redirect)=>{
    if(redirect){
      return <Redirect to="/cart"/>
    }
  }
  const addTOcart=()=>{
    additemtocart(product,()=>setRedirect(true))
  }


  const Showaddtocart=addtocart=>{
    return(
    addtocart && 
    <button
    onClick={addTOcart}
    className="btn btn-block btn-outline-success mt-2 mb-2"
  >
    Add to Cart
  </button>
    )

}

const Showremovefromcart=(removefromcart)=>{
    return(
        removefromcart&&<button
        onClick={() =>{
          removeItemFromCart(product._id) 
          setReload(!reload) }}
          
        className="btn btn-block btn-outline-danger mt-2 mb-2"
      >
        Remove from cart
      </button>

    )
}
  return (
    <div className="card text-white bg-dark border border-info mb-4">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <Imghelper product={product}/>
         <p className="lead bg-success font-weight-normal text-wrap"> {cartDescription}</p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">
            {Showaddtocart(addtocart)}
          </div>
          <div className="col-12">
            {Showremovefromcart(removefromcart)}

          </div>
        </div>
      </div>
    </div>
  );
};
export default CarD;