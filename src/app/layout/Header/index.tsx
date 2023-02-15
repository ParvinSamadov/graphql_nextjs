import Link from "next/link";
import React from "react";
import { HeaderStyled } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Link href="/">To Do App For Testing GraphQl</Link>
      <Link href="/server-side-call">Test server side call</Link>
    </HeaderStyled>
  );
};

export default Header;
