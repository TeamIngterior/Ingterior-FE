import styled from 'styled-components';
import { theme } from '@/assets/styles/theme';

export const ImageEditorContext = styled.p`
  ${theme.typography.caption.c2};
  color: ${theme.color.gray04};
  margin-bottom: ${theme.gap.gap2};

  &.detail {
    line-height: 1.5;
  }
`;

// 이미지 드롭존 (업로드 영역)
export const ImageEditorDropzone = styled.div`
  ${theme.typography.label.lb1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  margin-bottom: ${theme.gap.gap2};
  border: 1px solid ${theme.color.gray03};
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: ${theme.gap.gap1};
  }
`;

//  이미지 썸네일 영역
export const ImageEditorThumbnail = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${theme.gap.gap2};

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ImageEditorButtonContainer = styled.div`
  display: flex;
  gap: 0 ${theme.gap.gap1};
`;

// 이미지 에디터 캔버스 영역
export const ImageEditorCanvasContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    display: inline-flex;
    border: 1px solid #000;
    margin: 3px;
  }
`;
