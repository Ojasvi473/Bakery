import React, { useState } from "react";
import Card from "../../assets/Card/Card";
import Title from "../../assets/Title/Title";
import Footer from "../Footer/Footer";
import "./dashboard.css";
const Dashboard = () => {
  let card = [
    {
      title: "Cold drinks",
      desc: "200 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Redbull",
      desc: "4000 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Chips",
      desc: "800 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Pulse",
      desc: "900 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Rice",
      desc: "600 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Maggie",
      desc: "400 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Pasta",
      desc: "300 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
    {
      title: "Cake",
      desc: "5000 Rs",
      img: "https://static.toiimg.com/photo/48201473.cms",
    },
  ];
  return (
    <div>
      {/* slider */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://wallpapercrafter.com/desktop/218772-bread-and-pastries-on-a-display-in-a-bakerybread-a.jpg#][-0s"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpapercrafter.com/desktop/218772-bread-and-pastries-on-a-display-in-a-bakerybread-a.jpg#][-0s"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpapercrafter.com/desktop/218772-bread-and-pastries-on-a-display-in-a-bakerybread-a.jpg#][-0s"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* slider over */}
      <Title title="Vaibhavi Bakery" desc="One of the trust worthy brand" />
      <div
        className="d-flex px-3"
        style={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {card?.map((data, index) => {
          return (
            <Card
              key={index}
              title={data.title}
              desc={data.desc}
              url={data.img}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
