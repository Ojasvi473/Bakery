import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ url, title, desc, data }) => {
  const navigate = useNavigate();
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={url} class="card-img-top" alt="Img" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
        <a
          onClick={() => navigate("/overview", { state: data })}
          class="btn btn-primary"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Card;
