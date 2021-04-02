const express = require("express")
const router = express.Router()

const {getUserById} =require("../controllers/user")
const {isAuthenticated,isAdmin,isSignedin} =require("../controllers/auth")
const {getProductById,createProduct,deleteProduct,getProducts,photo,updateProduct,getAllUniqueCategories,getProduct} = require("../controllers/product")

// read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//all params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all router
router.post(
    "/product/create/:userId",
    isSignedin,
    isAuthenticated,
    isAdmin,
    createProduct
);

//delete
router.delete("/product/:productId/:userId",isSignedin,isAdmin,isAuthenticated,deleteProduct);
//update
router.put("/product/productId/:userId",isSignedin,isAdmin,isAuthenticated,updateProduct)

//products
router.get("/products",getProducts);
router.get("/products/categories", getAllUniqueCategories);

module.exports = router;