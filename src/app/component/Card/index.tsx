import React from "react";
import { IProps } from "./type";

const Card: React.FC<IProps> = ({ img, title }) => {
  return (
    <div className="col-3 h-100">
      <div className="card-top">
        <img className="w-100" src={img} />
      </div>
      <div className="card-bottom d-flex flex-column">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
