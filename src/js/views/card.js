
import React, {useContext} from "react"
import { Context } from "../store/appContext";


export const Card = ({id, name, email, phone, address}) => {
const {store, actions} = useContext (Context)

    return (
<div className="container card mb-3 mt-3" style={{ maxWidth: "540px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://picsum.photos/200/300" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
       <p className="card-text"><i className="fas fa-phone"></i>{phone}</p>                  
       <p className="card-text"><i className="fas fa-envelope"></i>{email}</p>
        <p className="text-body-secondary"><small className="text-body-secondary"><i className="fas fa-home"></i>{address}</small></p>
      </div>
    </div>
  </div>
</div>
    );
};