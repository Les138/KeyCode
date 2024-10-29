const Tarjeta = ({nombre = 'N/A', apellido = 'N/A', edad = 0, genero = false}) => {

  return (
    <>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>
      <p>Genero: {genero ? 'Femenino' : 'Masculino'}</p>
      <hr />
    </>
  )
}

export default Tarjeta
