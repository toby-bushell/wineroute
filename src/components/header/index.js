// import PropTypes from "prop-types"
import React from 'react';
import { HeaderStyled, Nav, Menu, MenuItem, StyledLink } from './styles';

const Header = () => (
  <HeaderStyled>
    <Nav>
      <Menu>
        <MenuItem>
          <StyledLink to="/">Home</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/vineyards">vineyards</StyledLink>
        </MenuItem>
      </Menu>
    </Nav>
  </HeaderStyled>
);

export default Header;
