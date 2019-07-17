import styled from 'styled-components';
import { Link } from '@reach/router';
import { breakpoint } from '../../styles/breakpoint';

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing.large};
  height: ${({ theme }) => theme.layout.headerHeightMobile};

  ${breakpoint.tablet`
    height: ${({ theme }) => theme.layout.headerHeight};
  `};
`;

export const Nav = styled.nav`
  display: flex;
`;
export const Menu = styled.ul`
  padding: 0;
  margin: 0 0 0 auto;
`;
export const MenuItem = styled.li`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary};
`;
