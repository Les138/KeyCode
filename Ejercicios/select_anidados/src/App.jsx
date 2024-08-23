import { useState } from 'react';
import { Selects } from './components/Selects';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-white bg-gray-900">
      <h1 className="mb-4 text-3xl font-light tracking-widest">Aprendizaje React</h1>
      <p className="mb-10 text-lg font-medium">Selects Anidados</p>
      <div className="w-full max-w-lg">
        {/* SelectAnidados */}
        <Selects />
      </div>
    </div>
  );
};

export default App;




