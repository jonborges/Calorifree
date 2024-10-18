import React from 'react';
import Routes from './src/routes';
import { AppProvider } from './src/Context/AppContext';  

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
