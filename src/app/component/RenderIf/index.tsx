import React from "react";
import { IProps } from "./type";

const RenderIf: React.FC<IProps> = ({
  condition,
  children,
  renderElse = "",
}) => {
  if (condition) return <>{children}</>;
  return <>{renderElse}</>;
};

export default RenderIf;
