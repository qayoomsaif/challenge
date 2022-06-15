import React from 'react';
import { SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux-store/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { font, color } from 'globalStyle';
import { Routes } from './Route/index';
import ErrorBoundary from './ErrorBoundary';
const store = createStore(rootReducer, applyMiddleware(thunk));
export default App = () => {
  return (<View style={{ flex: 1 }}>
    <ErrorBoundary>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'#fff'}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ErrorBoundary>
  </View>)
}
