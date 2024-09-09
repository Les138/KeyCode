import React from 'react'

const Welcome = () => {
  return (
    <section className='py-20 text-center bg-gray-100'>
        {/* Titulo */}
        <h1 className='mb-4 text-4xl font-bold'>Bienvenido a nuestro website</h1>
        {/* Eslogan*/}
        <p className='mb-8 text-lg'>Empresa dedica a prestar servicio de desarrollo web</p>
        {/* Boton*/}
        <button className='px-6 py-2 text-white transition ease-in-out rounded bg-violet-400 hover:bg-blue-400'>¡Iniciemos!</button>
    </section>
  )
}

export default Welcome

