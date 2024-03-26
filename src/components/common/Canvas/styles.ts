import styled from 'styled-components';

export const CanvasWrapper = styled.div`
  width: 100%;
  max-width: 588px;
`;

export const CanvasContainer = styled.div`
  position: relative;
  margin: 30px auto 50px;
  width: 100%;
  height: 0;
  padding-top: 100%;

  canvas {
    position: absolute;
    inset: 0;
    border: 1px solid #ddd;
  }
`;
