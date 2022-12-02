import React from "react";
import { useLocation } from "react-router-dom";

const Thanku = () => {
  const location = useLocation();
  return (
    <div
      className="text-center  d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div class="card w-50">
        <div class="card-body">
          <h5 class="card-title">Thank You {location.state?.Name}</h5>
          <p class="card-text">Your Order is Placed</p>
        </div>
      </div>
    </div>
  );
};

export default Thanku;