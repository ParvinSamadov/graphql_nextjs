import React from "react";
import Image from "next/image";
import { AlbumStyled } from "./Album.styles";
import { IProps } from "./type";

const Album: React.FC<IProps> = ({ img, title }) => {
  return (
    <AlbumStyled>
      <Image src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <h6>Look Clothes</h6>
      </div>
    </AlbumStyled>
  );
};

export default Album;
