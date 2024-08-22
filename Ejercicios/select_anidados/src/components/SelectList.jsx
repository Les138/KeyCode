export const SelectList = ({ title }) => {
    const key = `select-${title}`;
    const label = title.toUpperCase();
    const options = ["Cund", "Anti", "Cald"];
  
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-sm font-semibold text-gray-700" htmlFor={key}>
          {label}
        </label>
        <select
          name={key}
          id={key}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione un {title}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  