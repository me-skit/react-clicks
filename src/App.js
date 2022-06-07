import './App.css';
import logo from './images/logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  
  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    setClicks(clicks + 1);
  };

  const resetCounter = () => {
    setClicks(0);
  };

  return (
    <div className='App'>
      <div className='container-logo'>
        <img 
          className='logo'
          src={logo}
          alt="App logo" 
        />
      </div>
      <div className='main'>
        <Counter clicks={clicks}/>
        <Button
          text='Click'
          clickButton={true}
          clickHandler={clickHandler}
        />
        <Button
          text='Reset'
          clickButton={false}
          clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
