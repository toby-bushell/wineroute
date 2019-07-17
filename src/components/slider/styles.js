import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  height: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const ImageHolder = styled.div`
  height: 400px;
`;

export const DotsList = styled.ul`
  position: absolute;
  bottom: 0;

  li button:before {
    font-size: 16px !important;
  }
`;
