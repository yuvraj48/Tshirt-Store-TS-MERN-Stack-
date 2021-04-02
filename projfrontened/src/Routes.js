import React from "react";
import { Switch, Route } from "react-router-dom";
import Headers from "./core/Header";
import Footers from "./core/Footer";
import SignUp from "./user/Signup";
import SignIn from "./user/Signin";
import Profile from "./core/Home"
import './styles.css'
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import Userdashboard from "./user/UserDashBoard";
import Admindashboard from "./user/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import UpdateProduct from "./admin/UpdateProduct";
import ManageProducts from "./admin/ManageProducts"
import Cart from "./core/cart";


const Routes = () => {
  return (
    <div>
      <Headers/>
      <Switch>
        <Route path="/signup" component={SignUp}/> 
        <Route path="/signin" component={SignIn}/> 
        <Route path="/home" component={Profile}/> 
         <PrivateRoute path="/user/dashboard" component={Userdashboard}/>
         <AdminRoute path="/admin/dashboard" component={Admindashboard}/>
         <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <Route path="/cart" exact component={Cart}/>
       
      </Switch>
      <Footers/>
      
   </div>
     
   
  );
};

export default Routes;

