import "./App.css";
import { descifrar, mensaje } from "./descifrar";

function App() {
  const mensajeDescifrado = descifrar(mensaje);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold text-blue-600">Hackathon</h1>
      <div className="w-11/12 p-6 bg-white rounded-lg shadow-md md:w-1/2">
        <div className="mb-4">
          <p className="text-lg font-semibold">Código para descifrar:</p>
          <p className="p-4 text-gray-700 bg-gray-200 rounded-lg">{mensaje}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Mensaje descifrado:</p>
          <p className="p-4 text-gray-700 bg-green-200 rounded-lg">{mensajeDescifrado}.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

