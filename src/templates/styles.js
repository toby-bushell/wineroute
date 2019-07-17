import styled from 'styled-components';

export const MapContainer = styled.div`
  /* display: flex; */
`;

export const Map = styled.div`
  height: calc(100vh - 100px);
  width: calc(100vw - 540px);
  position: fixed;
  top: 100px;
  right: 0;
`;

export const ListWrapper = styled.div`
  width: 520px;
  padding-left: 20px;
`;

export const MarkerIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ active }) => (active ? 'green' : 'blue')};
`;
