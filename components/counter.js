import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      backgroundColor: '#98FB98', // Fondo de la página
      minHeight: '100vh', // Altura mínima para ocupar toda la pantalla
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ 
        backgroundColor: '#FFB6C1', // Fondo recuadro pequeño
        color: '#FFFFFF', // Color de texto blanco
        border: '2px solid #333', 
        borderRadius: '10px', 
        padding: '50px', 
        width: '250px', 
        textAlign: 'center',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '15px', textTransform: 'uppercase' }}>Contador</h2>
        <p style={{ fontSize: '20px', color: '#808080' }}>Valor actual: {count}</p>
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={increment}
            style={{ 
              backgroundColor: '#ADD8E6', //Color incrementar
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              padding: '10px 20px', 
              cursor: 'pointer',
              marginRight: '10px',
              fontSize: '16px'
            }}
          >
            Incrementar
          </button>
          <button 
            onClick={reset}
            style={{ 
              backgroundColor: '#C8A2C8', //Color reiniciar
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
