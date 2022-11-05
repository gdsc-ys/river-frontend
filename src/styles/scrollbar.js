import { css } from 'styled-components';

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgb(189, 189, 189);
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;
