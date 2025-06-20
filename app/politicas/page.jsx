

const Politicas = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4">Última actualización: 28 de mayo de 2025</p>

      <p className="mb-4">
        Esta <strong>Política de Privacidad</strong> describe qué tipo de información recopilamos, con qué finalidad y cómo la gestionamos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsable del tratamiento</h2>
      <p className="mb-4">
        El responsable del tratamiento de los datos personales recopilados a través de este sitio web es:
        <br />
        La <strong>Dirección de Investigación y Extensión</strong> de la Facultad de Ciencias y Tecnología de la Universidad Nacional de Canindeyú<br />
        Correo de contacto: <a href="mailto:dir.invext@facitec.edu.py" className="text-sky-600 hover:text-sky-400">dir.invext@facitec.edu.py</a><br />
        Ubicación: <a href="https://maps.app.goo.gl/QiVLn1knSPgD9rHL8" className="text-sky-600 hover:text-sky-400" target="_blank">Saltos del Guairá, Paraguay.</a>
      </p>
      <p className="mb-4">
        Esta aplicación fue desarrollada en el marco del proyecto de investigación <strong>"Sistema de red de sensores inalámbricos para el monitoreo de la calidad del agua en cauces hídricos del departamento de Canindeyú"</strong> financiado por el Consejo Nacional de Ciencia y Tecnología (CONACYT) de Paraguay.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Información que recopilamos</h2>
      <p className="mb-4">
        Recopilamos la siguiente información mediante un formulario de suscripción:
        No se utilizan cookies ni tecnologías de rastreo.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Institución de pertenencia</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Finalidad del tratamiento de los datos</h2>
      <p className="mb-4">
        Los datos recopilados se utilizan únicamente para enviar alertas por correo electrónico relacionadas con eventos relevantes sobre la calidad del agua monitoreada.
      </p>
      <p className="mb-4">
        Los usuarios pueden cancelar su suscripción en cualquier momento mediante el enlace incluido en cada correo o escribiendo a nuestro correo de contacto.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Almacenamiento y conservación de datos</h2>
      <p className="mb-4">
        Los datos se almacenan mientras la suscripción esté activa. Una vez cancelada, la información se elimina de forma segura.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Compartición de datos</h2>
      <p className="mb-4">
        No compartimos, vendemos ni transferimos datos personales a terceros. Tampoco se transfieren datos a otros países ni se usan servicios externos con acceso a dicha información.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. API pública</h2>
      <p className="mb-4">
        Nuestra aplicación ofrece una API pública para consultar datos sobre la calidad del agua de los ríos. Esta API:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>No requiere autenticación</li>
        <li>No recopila información personal</li>
        <li>No rastrea ni almacena datos de usuarios</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Derechos del usuario</h2>
      <p className="mb-4">
        Usted tiene derecho a acceder, rectificar o eliminar sus datos personales, así como a retirar su consentimiento. Para ejercer estos derechos, escríbanos a <a href="mailto:dir.invext@facitec.edu.py" className="text-sky-600 hover:text-sky-400">dir.invext@facitec.edu.py</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Seguridad de los datos</h2>
      <p className="mb-4">
        Se implementan medidas técnicas y organizativas adecuadas para proteger los datos personales contra accesos no autorizados, pérdida o modificación.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Cambios a esta política</h2>
      <p className="mb-4">
        Podemos modificar esta Política de Privacidad en cualquier momento. Cualquier cambio importante será comunicado a los usuarios por correo electrónico. La versión actualizada estará disponible en esta página.
      </p>
    </div>
  );
};

export default Politicas;
