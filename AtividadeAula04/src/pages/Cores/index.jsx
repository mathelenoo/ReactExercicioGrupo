import { useEffect, useState } from 'react';
import './style.css'

function Cores() {
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

    const [currentColor, setCurrentColor] = useState(cores[0]);

  const changeColor = () => {
    const newColor = cores[Math.floor(Math.random() * cores.length)];
    setCurrentColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  return (
    <div className='container'>
    <h1>Cor de fundo: {currentColor}</h1>
    <button onClick={changeColor}>Trocar Cor</button>
  </div>
  )
}

export default Cores;