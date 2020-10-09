import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8b3;
      font-weight: 700;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#a8a8b3')};
      }

      svg {
        margin-right: 12px;
      }
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 110px;
      width: 110px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      h1 {
        color: #3d3d4d;
        font-size: 36px;
        font-weight: 700;
      }

      p {
        color: #737380;
        font-size: 20px;
        margin-top: 12px;
        width: 600px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        font-size: 36px;
        font-weight: 700;
      }

      p {
        color: #6c6c80;
        font-size: 20px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

    div {
      width: 680px;

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
