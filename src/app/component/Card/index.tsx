import React from "react";
import { IProps } from "./type";

const Card: React.FC<IProps> = ({ item }) => {
  return (
    <div className="col-3 h-100">
      <div className="card-top">
        <img className="w-100 h-for_img" src={item?.imageUrl} />
      </div>
      <div className="card-bottom d-flex justify-content-between px-2">
        <h3>{item?.name}</h3>
        <p>{item?.price} AZN</p>
      </div>
    </div>
  );
};

export default Card;
