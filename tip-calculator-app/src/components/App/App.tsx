import React from 'react';
import './App.css';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../images/logo.svg';

const App: React.FC= () => {
  return(
    <div className='app'>
        <img src={Logo} alt="Splitter App Logo" width="100" height="60"></img>
        <Wrapper />
    </div>
  );
}

export default App;