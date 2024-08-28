import { useState } from "react";
import { SelectList } from "./SelectList";
import { useFetch } from "../../hooks/useFetch";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");

  const urlmunicipio = `https://api-colombia.com/api/v1/City/${municipios}`

  const {data} = useFetch(urlmunicipio)
  console.log(data);
  return (
    <div className="p-8 space-y-6 bg-gray-800 shadow-2xl rounded-xl">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      { departamentos && (<SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
      />)}
     {municipios && (
        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Descripción del Municipio</h2>
          <p className="text-gray-700"><strong>Nombre:</strong> {data.name}</p>
          <p className="text-gray-700"><strong>Población:</strong> {data.population}</p>
          <p className="text-gray-700"><strong>Área:</strong> {data.area} km²</p>
        </div>
      )}
    </div>
  );
};
