import React from 'react';
import { Container } from '../styled/containers';
import { getAvailableWineColours } from './helpers';
import { ReactComponent as WineSVG } from '../../assets/svg/wine-glass.svg';
import { Summary, Icons, SVGHolder, Address } from './styles';
import AvailableWineColours from './wine-colours';
import Vineyard from '../../templates/single-vineyard';

const VineyardSummary = ({ wines, activites, name, address }) => {
  const availableWineColours = getAvailableWineColours(wines);
  console.log('availableWineColours', availableWineColours);
  return (
    <Summary>
      <Container>
        <h1>{name}</h1>
        <AvailableWineColours wines={wines} />
        <Address>
          <small>{address}</small>
        </Address>
      </Container>
    </Summary>
  );
};

export default VineyardSummary;
