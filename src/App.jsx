import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import generateStore from './redux/store/store'
import { Pokemon } from './components/Pokemon';

function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}

export default App;
