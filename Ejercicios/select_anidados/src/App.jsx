import { Selects } from './components/Selects';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Aprendizaje React</h1>
      <p className="text-lg text-gray-700 mb-6">Selects Anidados</p>
      <hr className="border-2 border-blue-500 w-full mb-6" />
      <div className="w-3/4">
        {/* SelectAnidados */}
        <Selects />
      </div>
    </div>
  );
};

export default App;
