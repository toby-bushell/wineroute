import styled, { css } from 'styled-components';
import { Link } from '@reach/router';
import { breakpoint } from '../../styles/breakpoint';

export const Item = styled(Link)`
  display: flex;
  flex-shrink: 0;
  height: 150px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.palette.greyLight};
  color: ${({ theme }) => theme.palette.black};
/* 
  border-right: ${({ active, theme }) =>
    active && `4px solid ${theme.palette.brown}`}; */

  ${({ active }) =>
    active &&
    css`
      box-shadow: 1px 1px 4px rgba(33, 33, 33, 0.2);
      border-right: 4px solid ${({ theme }) => theme.palette.brown};
    `}
  &:hover {
    box-shadow: 1px 1px 4px rgba(33, 33, 33, 0.2);
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
  flex: 1;

  ${breakpoint.desktop`
    padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.small}`};
  `}
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${breakpoint.tablet`
    flex-direction: column-revers;
  `};
`;

export const Map = styled.div`
  /* display: ${({ showMobile }) => (showMobile ? 'block' : 'none')}; */
  /* header + scroll list */ 
  height: calc(100vh - 230px); 
  

  ${breakpoint.tablet`
    position: fixed;
    top: 100px;
    right: 0;
    width: calc(100vw - 440px);
    height: calc(100vh - ${({ theme }) => theme.layout.headerHeight} );
    display: block;
  `};

  ${breakpoint.desktop`
      width: calc(100vw - 540px);

  `}
`;

export const ListWrapper = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;

  ${({ inline }) =>
    inline &&
    css`
      display: flex;
      height: 150px;

      ${Item} {
        margin-bottom: 0;
      }
    `}
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${breakpoint.tablet`
      width: 420px;
      height: auto;
      padding-right: 0;
      padding-left:   ${({ theme }) => theme.spacing.medium};
  `};
  ${breakpoint.desktop`
      width: 520px;
  `};
`;

export const MarkerIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) => (active ? 'green' : 'blue')};
`;

export const MapIcon = styled.button`
  background-color: red;
  position: fixed;
  bottom: 50px;
  right: ${({ theme }) => theme.spacing.medium};

  ${breakpoint.tablet`
    display: none;
  `}
`;
