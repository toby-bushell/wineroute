import styled, { css } from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';

export const Container = styled.div`
  max-width: ${({ theme, slim }) =>
    slim ? theme.sizes.slimWidth : theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};

  ${({ desktopOnly, theme }) =>
    desktopOnly &&
    css`
      padding: 0;
      ${breakpoint.tablet`
        padding: 0 ${theme.spacing.medium};
    `};
    `}
`;
