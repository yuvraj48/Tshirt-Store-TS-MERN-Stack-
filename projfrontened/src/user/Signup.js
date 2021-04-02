import React, { useState } from 'react';
import {Row,Col,Form, Label, Input ,Button} from 'reactstrap';
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data&&data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const SignUpForm = () => {
    return (
        <div className ="container  ">
                <Form className="ml-auto mr-auto " >
                    <Row >
                        <Col md={9}  xs={8}  className="ml-auto mr-auto ">
                           <Label for="name" md={12} className="text-light"  >Name</Label>
                            <Input className="form-control form-control-sm" onChange={handleChange("name")}
                            placeholder="Enter your name"  type="text"   value={name}/>
                        </Col>
                    </Row>

                    <Row >
                        <Col md={9} xs={8} className="ml-auto mr-auto">
                           <Label for="name" md={12} className="text-light" >Email</Label>
                            <Input className="form-control form-control-sm" onChange={handleChange("email")}  value={email} placeholder="Enter your email" type="text" />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Col md={9}  xs={8} className="ml-auto mr-auto">
                           <Label for="name" md={12} className="text-light" >Password</Label>
                            <Input className="form-control form-control-sm" onChange={handleChange("password")} placeholder="Enter your password"   value={password} type="text" />
                        </Col>
                   </Row>

                   <Row className="form-group">
                       <Col md={7} xs={6}  className=" ml-auto mr-auto" >
                           <Button onClick={onSubmit} className="btn btn-block btn-success " type="submit">Continue</Button>
                       </Col>
                   </Row>
                   
                </Form>
            </div>
     
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
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

  return (
    <div className="container col-md-5 col-sm-8 col-xs-12 signupt   ">
    {successMessage()}
    {errorMessage()}
 <Row  className="  signupC mt-5">
            <Col md={12} xs={10} sm={8} className=" ml-auto mr-auto  " >
             <h1 className="ml-3 signup">Sign Up </h1>
             </Col>
             <Col md={12} xs={12} className=" ml-auto mr-auto  " >
             <h6 className="  signupb">Just few steps and you're done!
             We hate paperwork, too.</h6>
            </Col>
          
        </Row>
        {SignUpForm()}
        
</div>
  );
};



 
export default SignUp;