import './App.css'
import logo from './images/logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

const [numClick, setNumClicks] = useState(0); 

  const manageClick = () => {
    setNumClicks(numClick + 1);
  }
const restartCounter = () => {
  setNumClicks(0);
}

  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' 
        src={logo}
        alt='Logo'
        />
      </div>
        <div className='main-container'>
          <Counter numClick={numClick} />
          <Button 
          text='Click'
          isClickButton={true}
          manageClick={manageClick} />
          <Button 
          text='Restart'
          isClickButton={false}
          manageClick={restartCounter}
          />
        </div>
    </div>
  )
}

export default App
