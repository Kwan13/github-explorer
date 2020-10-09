import styled, { css } from 'styled-components';

interface TooltipProps {
  isErrored: boolean;
}

export const Container = styled.div<TooltipProps>`
  position: relative;
  margin-left: 16px;

  span {
    background: #04d361;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    text-align: center;

    position: absolute;
    bottom: calc(100% + 12px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #04d361 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  svg {
    color: #04d361;
  }

  ${props =>
    props.isErrored &&
    css`
      span {
        background: #fa5858;
        &::before {
          border-color: #fa5858 transparent;
        }
      }

      svg {
        color: #fa5858;
      }
    `}
`;
