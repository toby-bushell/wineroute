import styled from 'styled-components';

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.offWhite};
  padding: ${({ theme }) => `${theme.spacing.large} 0`};
  border-top: 2px solid ${({ theme }) => theme.palette.greyLight};
`;

export const Title = styled.h3``;
