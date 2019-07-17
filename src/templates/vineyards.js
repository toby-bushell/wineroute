import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import VineyardsJSON from '../json/vineyards';
import { Container } from '../components/styled/containers';
import VineyardList from '../components/vineyard-list';
import { useGetVineyards } from '../actions';

const Vineyards = () => {
  const vineyards = useGetVineyards();

  return (
    <Layout>
      <Container desktopOnly>
        <VineyardList vineyards={vineyards} />
      </Container>
    </Layout>
  );
};

export default Vineyards;
