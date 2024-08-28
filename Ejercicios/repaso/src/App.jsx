import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const title = 'Vite + React'
  const [contador, setContador] = useState(5)
  const [contador5, setContador5] = useState(contador)

  const restarContador = (cantidad) => {
    setContador (contador - 1)
  }

  const sumarContador = (cantidad) => {
    setContador (contador + 1)
  }
  
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
        <div className='contenedorContador'>
          <p>Contador 1</p>
          <button onClick={restarContador}>-</button>
          <p className='contador'>{contador}</p>
          <button onClick={sumarContador}>+</button>
        </div>
        <div className='contenedorContador'>
          <p>Contador 5</p>
          <button onClick={restarContador}>-</button>
          <p className='contador'>{contador5}</p>
          <button onClick={sumarContador}>+</button>
        </div>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
