import React from 'react';
import { MarkerIcon } from './styles';

const Marker = ({ active, text }) => (
  <MarkerIcon active={active}>{text}</MarkerIcon>
);

export default Marker;
