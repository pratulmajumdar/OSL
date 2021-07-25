import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import CustomRoute from './Route';
import configureStore from './store';
import { PersistGate } from 'redux-persist/es/integration/react';
import Header from './components/header';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Router basename="">
            <CustomRoute />
          </Router>
        </PersistGate>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
