const ContactForm = () => {
  const enviarFormulario = () => {
    console.log("Enviando Form...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Formulario de contacto
        </h1>
        <form onSubmit={enviarFormulario} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={"Leslye"}
          />
          <input
            type="email"
            name="email"
            placeholder="Escribe tu Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={"Leslye@gmail.com"}
          />
          <input
            type="text"
            name="asunto"
            placeholder="Asunto..."
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={"Vacante Laboral en React.js"}
          />
          <textarea
            name="observaciones"
            placeholder="Escribe tus observaciones..."
            required
            rows={5}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={"Vacante Laboral en React.js"}
          />
          <input
            type="submit"
            value="Enviar"
            className="w-full p-3 mt-4 text-white transition duration-300 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;