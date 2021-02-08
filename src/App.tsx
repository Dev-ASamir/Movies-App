import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './navigation';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './redux/store';

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <StatusBar barStyle={'light-content'} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
