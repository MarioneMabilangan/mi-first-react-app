import React, { useState } from 'react';

const CoinFlip = () => {
  const [result, setResult] = useState('');

  const flipCoin = () => {
    const random = Math.random();
    const newResult = random < 0.5 ? 'Cara' : 'Cruz';
    setResult(newResult);
  };

  return (
    <div>
      <button onClick={flipCoin}>¡Lanzar moneda!</button>
      {result && <p>Resultado: {result}</p>}
    </div>
  );
};

export default CoinFlip;