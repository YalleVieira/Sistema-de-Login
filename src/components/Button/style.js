import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  width: 200px;
  cursor: pointer;
  background-color: var(--cor--pink-destak);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  &:hover {
    background-color: var(--cor--pink-secondary);
  }
`;
