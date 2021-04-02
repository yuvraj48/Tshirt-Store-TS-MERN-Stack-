import React, { useEffect, useState } from "react";
import CarD from "./Card";
import {getProducts} from "../admin/helper/adminapicall"




const Profile = () => {

  const [products,setProducts]=useState([])
  const [error,setError]=useState(false)

  const loadAllProduct=()=>{
    getProducts().then(data=>{
      if(data&&data.error){
        setError(data.error)
      }
      else{
        setProducts(data)
      };
    });
  }

  useEffect(()=>{
    loadAllProduct();
  },[])

  return (
    <div className="">
     <div className="jumbotron text-center container">
                <h1>WElcome to TS</h1>
                <p>You are here for better!</p>
            </div>
    
    <div className="row text-center">
    <div className="row col-12 ml-4 mr-4">
     {products.map((product,index)=>{
       return(
         <div key={index} className=" col-12 col-xs-4 col-sm-4">
           <CarD product={product}/>
           </div>
       )
     })}
  
    </div> 
   
  </div>
  </div>
    
  );
};

export default Profile;
