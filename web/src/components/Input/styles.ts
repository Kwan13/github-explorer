import styled, { css } from 'styled-components';

interface InputProps {
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  background: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 5px 0 0 5px;
  width: 100%;
  padding: 29px;

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #fa5858;
      border-right: none;
    `}

  input {
    flex: 1;
    border: 0;
    color: #3d3d4d;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
