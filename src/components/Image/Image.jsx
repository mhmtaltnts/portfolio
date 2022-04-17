import React from "react";
import "./Image.scss";

function Image({ img, alt }) {
  return (
    <div className="img">
      <img src={img} alt={alt} />
    </div>
  );
}

export default Image;
