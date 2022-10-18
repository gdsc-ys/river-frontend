import { css } from 'styled-components';

export const fullscreen = css`
  width: 100%;
  min-height: 100vh;
`;

export const flexCenter = ({ horizontal = true }) => css`
  // centering using flexbox
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${horizontal ? 'row' : 'column'};
`;

export const absCenter = css`
  // centering w/ utilize GPU
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const blockCenter = css`
  //centering with block
  display: block;
  margin: 0 auto;
`;

export const textTrucate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const pseudo = ({ display, position, content, width, height }) => css`
  content: ${content || ''};
  display: ${display || 'block'};
  position: ${position || 'absolute'};
  width: ${width || '100%'};
  height: ${height || '100%'};
`;
