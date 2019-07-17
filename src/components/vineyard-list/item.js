import React from 'react';
import {
  Item,
  StyledLink,
  ImageHolder,
  Prices,
  WineMaker,
  Avatar,
} from './styles';
import { pricesRange } from '../../helpers';

const VineyardItem = ({ vineyard, ...rest }) => {
  console.log('rest', rest);
  // TODO: Change id to vineyard slug

  return (
    <Item>
      <StyledLink to={`/vineyards/${vineyard._id}`}>
        <ImageHolder>
          <img src={vineyard.pictures[0]} alt="vineyard" />
          <Prices>
            {vineyard.wines && <p>Wines: {pricesRange(vineyard.wines)}</p>}
            {vineyard.activities && (
              <p>Activities: {pricesRange(vineyard.activities)}</p>
            )}
          </Prices>
        </ImageHolder>
        <WineMaker>
          <Avatar src={vineyard.featuredImage} />
          <h3>{vineyard.company}</h3>
        </WineMaker>
      </StyledLink>
    </Item>
  );
};

export default VineyardItem;
