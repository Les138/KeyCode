import { SelectList } from "./SelectList";

export const Selects = () => {
    const TOKEN = "";

  return (
    <div className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg">
      <SelectList title="Estados" className="border border-gray-300 rounded p-2" url=''/>
      <SelectList title="Municipios" className="border border-gray-300 rounded p-2"/>
      <SelectList title="Ciudades" className="border border-gray-300 rounded p-2"/>
    </div>
  );
};
