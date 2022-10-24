import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const borderRadius = css`
  border-radius: 10px;
`;

export const Container = styled.div`
  ${flexCenter}
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  ${flexCenter};
  gap: 20px;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: var(--cor-secondary);
  max-width: 350px;
  padding: 20px;
`;

export const Label = styled.label`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: var(--cor--grey-light);
`;

export const LabelSignup = styled.label`
  font-size: 12px;
  color: var(--cor--grey-light);

  &:hover {
    color: var(--cor--pink-destak);
  }
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--cor--grey-light);

    &:hover {
      color: var(--cor--pink-destak);
    }
  }
`;
