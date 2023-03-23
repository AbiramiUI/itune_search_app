import React, { Component } from 'react';
import { ItuneSearchApp } from './components/ItuneSearchApp';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
  return(
    <Provider store={store}>
      <ItuneSearchApp />
    </Provider>
  )
}