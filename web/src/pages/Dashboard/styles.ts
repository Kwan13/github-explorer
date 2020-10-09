import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    width: 433px;
    color: #3a3a3a;
    margin-top: 100px;
  }

  form {
    width: 100%;
    max-width: 714px;
    display: flex;
    margin-top: 40px;

    button {
      height: 70px;
      width: 210px;
      background: #04d361;
      border: 0;
      border-radius: 0 5px 5px 0;
      color: #fff;
      transition: background 0.2s;
      font-weight: 700;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 120px;

  a {
    display: flex;
    background: #fff;
    width: 100%;
    max-width: 714px;
    height: 112px;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    padding: 14px;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      height: 83px;
      width: 83px;
      border-radius: 50%;
    }

    div {
      margin-left: 22px;

      strong {
        font-weight: 700;
        color: #3d3d4d;
        font-size: 24px;
      }

      p {
        color: #a8a8b3;
        width: 100%;
        max-width: 550px;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
