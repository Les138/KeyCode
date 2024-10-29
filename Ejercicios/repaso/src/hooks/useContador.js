import { useState, useEffect } from 'react';

export const useContador = () => {

  const title = "Vite + React";
  const [contador, setContador] = useState(0);
  const [contador5, setContador5] = useState(0);

  useEffect(() => {
    setContador5(contador);
  }, [contador]);

  // useEffect(() => {
  //   console.log('Hola, useEffect vacio')
  // }, [contador])

  const restarContador = (actualizar, leer, numero) => {
    actualizar(leer - numero);
  };

  const sumarContador = (actualizar, leer, numero) => {
    actualizar(leer + numero);
  };

  // const restarContador = () => {
  //   setContador (contador - 1)
  // }

  // const sumarContador = () => {
  //   setContador (contador + 1)
  // }

  // const restarContador5 = () => {
  //   setContador5 (contador5 - 5)
  // }

  // const sumarContador5 = () => {
  //   setContador5 (contador5 + 5)
  // }
  return (
    title,
    contador,
    contador5,
    setContador,
    setContador5,
    restarContador,
    sumarContador
  );
};
