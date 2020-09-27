import React from 'react';

import GlobalStyles from './styles/global';
import Header from '../src/components/Header';
import Pokemon  from '../src/components/Pokemon';
import Footer  from '../src/components/Footer';


function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Pokemon />
      <Footer />            
    </div> 
  );
}

export default App;
