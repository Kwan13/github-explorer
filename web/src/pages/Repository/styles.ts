import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }

    svg {
      height: 20;
      margin-right: 12px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 81px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;
      strong {
        font-size: 36px;
        font-weight: 700;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        color: #737380;
      }
    }
  }

  ul {
    margin-top: 30px;
    display: flex;
    list-style: none;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
        font-weight: 700;
      }

      span {
        color: #6c6c80;
        font-size: 20px;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  width: 100%;

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

    div {
      margin-left: 22px;

      strong {
        display: block;
        max-width: 650px;
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
