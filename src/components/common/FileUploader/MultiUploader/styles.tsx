import styled from 'styled-components';
import { theme } from '@assets/styles/theme';

export const FileUploaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const FileUploaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border: 1px solid ${theme.color.gray03};
  border-radius: 4px;
  margin-bottom: ${theme.gap.gap2};
`;

export const FileUploaderGuideText = styled.p`
  display: flex;
  align-items: center;
  ${theme.typography.label.lb1};
`;

export const FileCountContainer = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-weight: 600;
`;

export const FileUploaderInput = styled.input`
  display: none;
`;

export const FileUploaderLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

// Thumbnail
export const ThumbnailContainer = styled.div`
  position: relative;
  width: 78px;
  height: 78px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DeleteRegisterImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
