"use client";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../redux/store';
// import { store, persistor } from '../redux/store'; // relative path sahi
// ya alias use kar rahe ho to


export default function ProvidersWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
