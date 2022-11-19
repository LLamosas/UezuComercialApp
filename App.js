import * as React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/app/router';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import configureStore from './src/app/store';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
