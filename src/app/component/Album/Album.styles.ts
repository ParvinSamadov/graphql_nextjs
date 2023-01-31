import styled from "styled-components";

export const AlbumStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    position: absolute;
    top: 50%;
    left: 10%;
    background: #00000080;
    padding: 20px;
    border-radius: 8px;
    h3,
    h6 {
      color: white;
    }
  }
`;
