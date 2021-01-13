import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { HashRouter } from 'react-router-dom';

import RoutesProvider from './router/RoutesProvider';
import { store, persistor } from './services/redux/store';

import './styles/app.scss';
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename={`${window.location.pathname}`}>
          <RoutesProvider />
        </HashRouter>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
