import styled from 'styled-components';

export const SmallerText = styled.p`
  font-size: ${({ theme }) => theme.fontsize.small};
`;

export const NoMarginText = styled.p`
  margin-bottom: 0;
`;
