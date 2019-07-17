import React from 'react';
import { pricesRange } from '../../helpers';
import InfoSection from '../../components/info-section';

const VineyardPrices = ({ activites, wines }) => {
  console.log('pricesRangee', pricesRange);
  const winesPrices = wines && `Wines: ${pricesRange(wines)}`;
  const activitiesPrices = activites && `Activities: ${pricesRange(activites)}`;
  const pricesContent = `${winesPrices || ''}${
    activitiesPrices ? `<br/>${activitiesPrices}` : ''
  }`;

  return <InfoSection title="Prices" content={pricesContent} />;
};

export default VineyardPrices;
