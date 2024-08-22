import { SelectList } from "./SelectList";

export const Selects = () => {
  return (
    <div className="p-8 space-y-6 bg-gray-800 shadow-2xl rounded-xl">
      <SelectList title="Estado" />
      <SelectList title="Municipio" />
      <SelectList title="Ciudade" />
    </div>
  );
};


