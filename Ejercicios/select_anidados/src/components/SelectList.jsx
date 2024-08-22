export const SelectList = ({ title }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();
  const options = ["Cund", "Anti", "Cald"];

  return (
    <div className="flex flex-col">
      <label
        className="mb-3 text-sm font-light tracking-wide text-gray-400"
        htmlFor={key}
      >
        {label}
      </label>
      <select
        name={key}
        id={key}
        className="p-3 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Seleccione un {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
