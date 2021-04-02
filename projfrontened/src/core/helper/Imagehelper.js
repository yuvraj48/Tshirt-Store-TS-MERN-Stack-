import React from 'react';


const Imghelper=({product})=>{
  
    const imageUrl = product ? `/product/photo/${product._id}`:`https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png`

    return (
    <div className="rounded border border-success p-2">
    <img
      src={imageUrl}
      alt="photo"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
      className="mb-3 rounded"
    />
  </div>
  )
    //
}

export default Imghelper;