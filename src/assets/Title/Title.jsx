import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div>
      <h1 className="text-center mt-5">{title}</h1>
      <p className="text-center mt-1">{desc}</p>
    </div>
  );
};

export default Title;
