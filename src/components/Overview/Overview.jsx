import React from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Payments from "../Payments/Payments";
const Overview = () => {
  const navigate = useNavigate();

  const thanku = () => {
    navigate("Thanku");
  };
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const order = () => {
    setModal(true);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        height: "100vh",
      }}
    >
      {modal && <Payments setModal={setModal} />}
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={location.state.img}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{location.state.title}</h5>
              <p class="card-text">
                Pulse is one of the source of protein.A pulse refers to the dry,
                edible seed of the pod. This includes beans, lentils, peas, and
                other little seeds in lentils or beans.
              </p>
              <p className="text-center">{location.state.desc}</p>
              <p class="card-text">
                <small class="text-muted">Nov 30, 2pm - 3pm</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-outline-primary" onClick={order}>
        Order Now
      </button>
    </div>
  );
};

export default Overview;
