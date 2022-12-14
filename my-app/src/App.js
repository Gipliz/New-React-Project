import React, { useState } from 'react';

import './App.css';
import Kopfleiste from './Componetnts/Heder/Kopfleiste';
import SearchBar from './Componetnts/Search_Bar/SearchBar';
import SerchResults from './Componetnts/Search Results/SearchResults';
import Fuszeile from './Componetnts/Fußzeile/Fußzeile';
 



function App() {
    const [pics, setPics] = useState([]);


    return(
    <div className="App">
    
      <Kopfleiste/>
      <SearchBar setPics={setPics}/>
      <SerchResults pics = {pics}/>
      <Fuszeile/>        

    </div>

    );
}

export default App;