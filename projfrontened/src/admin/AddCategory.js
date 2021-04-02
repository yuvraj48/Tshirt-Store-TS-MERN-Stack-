import React, { useState } from 'react'
import  { Form,Button, Input, Label,Row,Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import { isAutheticated } from '../auth/helper'
import { createCategory } from './helper/adminapicall'

const AddCategory =()=>{
    const [name,setName]= useState("")
    const[error,setError]=useState(false)
    const[success,setSuccess]=useState(false)

    const {token,user}= isAutheticated()
    

    const back =()=>{
    return(
        <div className="mt-5">
            <Link to="/admin/dashboard" className="btn btn-sm btn-info "> Admin Home</Link>
        </div>
    )};
    
    const handleChange=event=>{
        setError("");
        setName(event.target.value)
    }
    const successmessage=()=>{
        if(success){
            return <h6 className="text-success bg-white ">Category created Successfully</h6>     
        }
     }
     const warningmessage=()=>{
        if(error){
            return(
                <h6 className="text-danger">Failed to create</h6>
            )
        }
     }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(false)
      //bacekende fired request
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data&&data.error){
                setError(true)
            }
            else{
                setError("");
                setSuccess(true);
                setName("");
            }
        })
    }

    const CategoryForm=()=>{
        return(
            <div >
                <Form >
                    <Row className='form-group'>
                        <Label for="category" md={10}><h6>Create a category</h6></Label>
                        <Col  sm={12} xs={12}>
                            <Input className="form-control "
                             type="text" 
                             placeholder="For ex. Summer" 
                             autoFocus 
                             required 
                             onChange={handleChange}
                             value={name}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button  onClick={onSubmit} className="btn btn-success">Create Category</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        )
    }
    return(
        <div className="container ">
            <div class="jumbotron text-center">
                <h1>Create Category  Here</h1>
                <p>Add a new category for users</p>
            </div>
            
            <div className="bg-info p-3 rounded col-md-8 col-xs-12 ml-auto mr-auto" > 
            {successmessage()}
            {warningmessage()}
                   <div className="p-2 bg-white ml-auto mr-auto  offset-md-2">{CategoryForm()} {back()}</div></div>
           
        </div> 
       
    )
}
export default AddCategory;