import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContador } from "./hooks/useContador";
import { useEffect, useState } from 'react';

const App = () => {

  const {
    title,
    contador,
    contador5,
    setContador,
    setContador5,
    restarContador,
    sumarContador
  } = useContador ();
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>
      <div className="card">
        <div className="contenedorContador">
          <p>Contador 1</p>
          <button onClick={() => restarContador(setContador, contador, 1)}>
            -
          </button>
          <p className="contador">{contador}</p>
          <button onClick={() => sumarContador(setContador, contador, 1)}>
            +
          </button>
        </div>
        <div className="contenedorContador">
          <p>Contador 5</p>
          <button onClick={() => restarContador(setContador5, contador5, 5)}>
            -
          </button>
          <p className="contador">{contador5}</p>
          <button onClick={() => sumarContador(setContador5, contador5, 5)}>
            +
          </button>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
