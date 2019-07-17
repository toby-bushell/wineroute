import React from 'react';
import Layout from '../../components/layout';
import { useGetVineyard } from '../../actions';
import HeroSlider from '../../components/slider';
import VineyardSummary from '../../components/vineyard-summary';
import InfoSection from '../../components/info-section';
import VineyardPrices from './prices';

const Vineyard = () => {
  // console.log('loggedIn', loggedIn);
  const vineyard = useGetVineyard();

  console.log('vineyard', vineyard);
  if (!vineyard) return '...loading';
  return (
    <Layout>
      <HeroSlider pictures={vineyard.pictures} />
      <VineyardSummary
        wines={vineyard.wines}
        activites={vineyard.activites}
        name={vineyard.name}
        address={vineyard.address}
      />
      <InfoSection title="About the Winery" content={vineyard.about} />
      <VineyardPrices activites={vineyard.activites} wines={vineyard.wines} />
    </Layout>
  );
};
export default Vineyard;
