import React from 'react';
import { Item, Image, Content, NameAndAddress } from './styles';
import AvailableWineColours from '../vineyard-summary/wine-colours';
import { SmallerText, NoMarginText } from '../styled/typography';

const MapList = ({ vineyards, setActive, activeVineyard }) => (
  <>
    {vineyards.map(vineyard => (
      <Item
        to={`/vineyards/${vineyard._id}`}
        onMouseEnter={() =>
          setActive(vineyard.latitude, vineyard.longitude, vineyard._id)
        }
        key={vineyard._id}
        active={activeVineyard && activeVineyard === vineyard._id}
      >
        <Image src={vineyard.featuredImage} alt={vineyard.name} />
        <Content>
          <div>
            <NoMarginText>{vineyard.name}</NoMarginText>
            <SmallerText>{vineyard.address}</SmallerText>
          </div>
          <AvailableWineColours wines={vineyard.wines} small />
        </Content>
      </Item>
    ))}
  </>
);

export default MapList;
