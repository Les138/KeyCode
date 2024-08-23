import { useFetch } from "./../../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  const { data, error, loading } = useFetch(url);
  if (!data) {
    return null
  }

  if (error) {
    return <p>Ha ocurrido un Error: {error}</p>;
  }

  let options = data

  return (
    <div className="flex flex-col">
      <label
        className="mb-3 text-sm font-light tracking-wide text-gray-400"
        htmlFor={key}>
        {label}
      </label>
      <select
        name={key}
        id={key}
        onChange={manejadorCambio}
        className="p-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Seleccione un {label}</option>
        {data && options.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
