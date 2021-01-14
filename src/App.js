import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import RoutesProvider from './router/RoutesProvider';

import 'animate.css';
import './styles/app.scss';
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import useLoading from './hooks/useLoading';
import colors from './styles/colors';

function App() {
  const [loading, setLoading] = useLoading();

  return (
    <>
      <HashRouter basename={`${window.location.pathname}`}>
        <RoutesProvider />
      </HashRouter>
      <Overlay open={loading} onClick={() => setLoading(false)}>
        <CircularProgress color="inherit" />
      </Overlay>
    </>
  );
}

export default App;

const Overlay = styled(Backdrop)`
  background-color: ${colors.darkBlue};
  color: ${colors.darkBlue};
  z-index: 10;
`;
