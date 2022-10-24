import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  background-color: var(--cor--pink-destak);
`;

export const Container = styled.div`
  padding: 30px;
  overflow: auto;
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-row: auto;
  gap: 50px;

  div {
    width: 300px;
  }

  img {
    width: 300px;
    height: 465px;
    object-fit: cover;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  img:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  p {
    font-weight: bold;
  }
`;
