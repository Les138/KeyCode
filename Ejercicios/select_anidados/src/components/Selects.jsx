import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [descripcion, setDescripcion] = useState("");

  console.log("Departamento ID", departamentos);
  console.log("Municipio ID", municipios);

  return (
    <div className="p-8 space-y-6 bg-gray-800 shadow-2xl rounded-xl">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
      />
    </div>
  );
};
