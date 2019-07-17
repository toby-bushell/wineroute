import React from 'react';
import Item from './item';
import { useGetVineyards } from '../../actions';

const VineyardList = ({ vineyards }) => {
  if (!vineyards || !vineyards.length) {
    return <p>No vineyards</p>;
  }

  return (
    <>
      {vineyards.map(vineyard => (
        <Item vineyard={vineyard} key={vineyard._id} />
      ))}
    </>
  );
};

export default VineyardList;
