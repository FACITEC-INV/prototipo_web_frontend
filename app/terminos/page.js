
const Terminos = () => {
  return (
    <div className="max-w-4xl mx-auto px-3  py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Licencia de Uso</h1>

      <p className="mb-4">
        Esta aplicación web fue desarrollada en el marco del proyecto de investigación titulado <strong>“Sistema de red de sensores inalámbricos para el monitoreo de la calidad del agua en cauces hídricos del departamento de Canindeyú”</strong>, financiado por el Consejo Nacional de Ciencia y Tecnología (CONACYT) de Paraguay.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Datos y API pública</h2>
      <p className="mb-4">
        Todos los datos proporcionados por esta aplicación, incluyendo aquellos accesibles a través de la API pública, pueden ser utilizados libremente sin restricciones, tanto para fines personales, académicos, científicos, educativos como comerciales.
      </p>
      <p className="mb-4">
        No se requiere autorización ni atribución obligatoria, aunque se recomienda citar la fuente cuando sea posible.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Tecnologías utilizadas</h2>
      <p className="mb-4">
        La aplicación fue desarrollada con tecnologías de código abierto como <a href="https://nextjs.org" className="text-blue-600 underline">Next.js</a> y <a href="https://react.dev" className="text-blue-600 underline">React</a>. Estas tecnologías tienen sus propias licencias disponibles en sus sitios oficiales.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
      <p>
        Para sugerencias, colaboraciones o reporte de errores, puede escribirnos a: <strong>dir.invext@facitec.edu.py</strong>
      </p>
    </div>
  );
};

export default Terminos;
