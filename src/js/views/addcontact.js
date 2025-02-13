import React, { useContext, useState, useEffect} from "react"
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export const AddContact = (props) => {
  const navigate = useNavigate();
  const {store, actions} = useContext(Context);
  const params = useParams();
  const path = useLocation();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

// Cargar datos si estamos en modo edición
useEffect(() => {

  console.log("ID desde params:", params.id);
  if (params.id && store.contacts.length > 0) {
    let contactToEdit = store.contacts.find(contact => contact.id == params.id);
    if (contactToEdit) {
      setContact({
        name: contactToEdit.name || "",
        phone: contactToEdit.phone || "",
        email: contactToEdit.email || "",
        address: contactToEdit.address || ""
      });
    }
  }
}, [params.id, store.contacts]);
// Manejar envío del formulario
const handleSubmit = async (e) => {
  console.log("ID antes de llamar editContact:", params.id);
  e.preventDefault();

  if (path.pathname === "/addcontact") {
    actions.addContact(contact, navigate);
  } else {
    actions.editContact(params.id, contact, navigate);
  }

  setContact({ name: "", phone: "", email: "", address: "" });
};
  
  const handleChange = (e) => {
    // console.log(e);
    setContact({...contact, [e.target.name] : e.target.value})
  };


  return (

    <div className="container">
      <div className="text-center mt-5 ">
        <h1 className="text-center mt-5">{path.pathname === "/addcontact" ? "Add New Contact" : "Edit Contact"}</h1>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputPhone1" className="form-label">Name</label>
          <input type="text" name="name" className="form-control" placeholder="Full Name" id="Name" value={contact.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label for="exampleInputPhone1" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="Phone" name= "phone" placeholder=" Phone " value={contact.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" name= "email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={contact.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Address</label>
          <input type="text" className="form-control" id="Address" name = "address" placeholder="Address" value={contact.address} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      <div className="mt-3">
        <Link to="/">Back home</Link>
      </div>
    </div>

  );

}
