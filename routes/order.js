const express = require("express")
const router=express.Router()


const {getUserById,pushOrderInPurchaseList} =require("../controllers/user")
const {isAuthenticated,isAdmin,isSignedin} =require("../controllers/auth")
const {updateStock} =require("../controllers/product")
const {createOrder,getOrderById,getAllOrder,updateStatus,getOrderStatus} =require("../controllers/order")




//param
router.param("userId",getUserById);
router.param("orderId",getOrderById);

router.post("/order/create/:userId",isSignedin,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder);
router.get("/order/all/:userId",isSignedin,isAdmin,isAuthenticated,getAllOrder)

//status
router.put("/order/:orderId/status/:userId",isSignedin,isAuthenticated,isAdmin,updateStatus);
router.get("/order/status/:userId",isSignedin,isAdmin,isAuthenticated,getOrderStatus)

module.exports = router;