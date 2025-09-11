// src/app/providers.js
"use client";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from '../redux/store'; // relative path sahi
// ya alias use kar rahe ho to
import { store, persistor } from '/redux/store';

export default function ProvidersWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
