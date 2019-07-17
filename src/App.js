import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';
import { StateProvider } from './state';
import { initialState } from './state/initial';
import { reducer } from './state/reducer';
import Home from './templates/home';
import Vineyards from './templates/vineyards';
import SingleVineyard from './templates/single-vineyard';
import { GlobalStyle } from './styles/global';
import theme from './styles/variables';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />

          <Router>
            <Home path="/" />
            <Vineyards path="vineyards" />
            <SingleVineyard path="vineyards/:vineyardId" />
          </Router>
        </>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;
