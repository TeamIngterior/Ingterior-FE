import styled from 'styled-components';

export const MobileHeaderContainer = styled.header`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 48px;
  display: none;

  .prevButton {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    min-width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileHeading = styled.h1`
  ${({ theme }) => theme.typography.label.lb1}
`;
