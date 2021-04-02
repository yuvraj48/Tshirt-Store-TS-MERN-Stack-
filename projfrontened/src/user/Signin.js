import React, { useState } from 'react';
import {Row,Col,Form, Label, Input, Button } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import {signin,isAutheticated,authenticate} from '../auth/helper'

const SignIn=()=>{
    const [values,setValues] = useState({
        email:"yuvrajra97@gmail.com",
        password:"Yuvraj!raj967",
        error:"",
        loading: false,
        didRedirect:false
    });
    
    const {email,password,error,loading,didRedirect} =values
    const {user}= isAutheticated

    const handleChange = name => event=>{
        setValues({...values,error:false,[name]:event.target.value});
    };

    const onSubmit =event =>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({...values,didRedirect:true})
                })
            }
        })
        .catch(console.log("sign in request failed"))
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        );
    };

    
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
    
  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };


    const SignInForm =()=>{
        return(
            <div className ="container col-12 ">
            <Form className="ml-auto mr-auto " >
            
                <Row >
                    <Col md={9} xs={8} className="ml-auto mr-auto">
                       <Label for="email" md={12} className="text-light" >Email</Label>
                        <Input type="text" className="form-control form-control-sm" onChange={handleChange("email")} value={email}  placeholder="Enter your email" />
                    </Col>
                </Row>

                <Row className="form-group">
                    <Col md={9}  xs={8} className="ml-auto mr-auto">
                       <Label for="password" md={12} className="text-light" >Password</Label>
                        <Input className="form-control form-control-sm" onChange={handleChange("password")} value={password} placeholder="Enter your password" type="text" />
                    </Col>
               </Row>
               <Row className="form-group ">
                   <Col md={7} xs={6}  className=" ml-auto mr-auto" >
                       <Button className="btn btn-block btn-success" onClick={onSubmit} type="submit">Continue</Button>
                   </Col>
               </Row>

               <Row  >
                    <Col md={12} sm={10} xs={12} className=" mb-5  signupC text-decoration-none ">
                       <Link to='./signup' md={12} className="text-light  " >New here?Click for SignUp</Link>
                        
                    </Col>
               </Row>
            </Form>
        </div>
        )
    };
   

    return(
        <div>
          {loadingMessage()}
          {errorMessage()}
        <div className="container col-12 col-md-4 col-sm-12  text-center signupt  ">
            
            <Row  className="form-group ml-auto mr-auto mt-5 signupC">
                    <Col md={12} xs={12} sm={4} className=" ml-auto mr-auto  " >
                        <h2 className=" signup"> Login </h2>
                    </Col>
            
                    <Col md={12} xs={12} className=" ml-auto mr-auto  " >
                        <h5 className="loginh px-0">Discover Fashion!</h5>
                        <p className="loginp px-0">You are one step away from signingup</p>
                       </Col>
        
                     
            </Row>
                   {SignInForm()}
                   {performRedirect()}
                 
        </div>
        </div>
      
    )
}



 
export default SignIn;