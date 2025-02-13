import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ id, name, email, phone, address }) => {
  const { store, actions } = useContext(Context);

  const handleDelete = async (id) => {
    await actions.deleteContact(id);
    actions.getContact();
  };

  return (
    <div className="container card mb-3 mt-3" style={{ maxWidth: "740px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src="https://picsum.photos/200/300" alt="..." />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="card-body text-start">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">
              <i className="fas fa-phone me-2"></i> {phone}
            </p>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i> {email}
            </p>
            <p className="text-body-secondary">
              <small className="text-body-secondary">
                <i className="fas fa-home me-2"></i> {address}
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-1 d-flex justify-content-between align-items-center gap-3">
          <Link className="fas fa-pencil" to={`/edit-contact/${id}`}></Link>
          <span
            className="deletecontact"
            onClick={() => handleDelete(id)}
            style={{ cursor: "pointer", color: "red" }}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};
