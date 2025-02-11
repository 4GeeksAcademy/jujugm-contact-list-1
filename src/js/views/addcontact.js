import React, {useContext, useState} from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddContact = () => {

  const [contact, setContact] = useState ({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

    return (
    
      <div className="container">
<form className= "container" onSubmit={handleSubmit}>
<div className="mb-3">
    <label for="exampleInputPhone1" className="form-label">Name</label>
    <input type="Full Name" className="form-control" placeholder="Full Name" id="Name" required/>
  </div>

<div className="mb-3">
    <label for="exampleInputPhone1" className="form-label">Phone</label>
    <input type="phone" className="form-control" id="Phone" placeholder=" Phone " required/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Address</label>
    <input type="phone" className="form-control" id="Address" placeholder="Address" required />
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div className="mt-3">
  <Link to="/">Back home</Link>
  </div>
    </div>
    );

  
}; 