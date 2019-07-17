import styled from 'styled-components';

export const Icons = styled.div`
  display: flex;
`;

export const SVGHolder = styled.div`
  width: ${({ small }) => (small ? '18px' : '26px')};
  margin: ${({ theme }) => theme.spacing.small};

  svg {
    color: ${({ color }) =>
      (color === 'red' && '#722f37') ||
      (color === 'white' && '#E9EA90') ||
      (color === 'rose' && '#FB7998')};
  }
`;

export const Summary = styled.div`
  text-align: center;
`;

export const Address = styled.p`
  margin: 0 auto ${({ theme }) => theme.spacing.large} auto;
`;
