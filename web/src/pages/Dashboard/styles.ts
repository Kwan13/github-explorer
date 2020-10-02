import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  isErrored: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-top: 100px;
  color: #3a3a3a;
  width: 433px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 714px;
  margin-top: 40px;

  input {
    width: 100%;
    align-items: center;
    height: 72px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    background: #fff;
    border: 2px solid #fff;

    ${props =>
      props.isErrored &&
      css`
        border: 2px solid #fa5858;
        border-right: none;
      `}

    &::placeholder {
      color: #666360;
    }
  }

  button {
    width: 210px;
    height: 72px;
    border: 0;
    background: #04d361;
    color: #fff;
    border-radius: 0 5px 5px 0;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repository = styled.div`
  margin-top: 120px;

  a {
    width: 100%;
    max-width: 714px;
    background: #fff;
    display: block;
    padding: 14px;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 83px;
      height: 83px;
      border-radius: 50%;
    }

    div {
      margin-left: 22px;

      strong {
        font-size: 24px;
        color: #3d3d4d;
      }

      p {
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
