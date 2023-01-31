import React from "react";
import { MainStyled } from "./Main.styled";
import { IProps } from "./type";

const Main: React.FC<IProps> = ({ children }) => (
  <MainStyled>{children}</MainStyled>
);

export default Main;
