const Descripcion = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900">Resumen del Proyecto</h2>
        </div>
        <p>El proyecto <b>“Sistema de red de sensores inalámbricos para el monitoreo de la calidad del agua en cauces hídricos del departamento de Canindeyú”</b> busca implementar una solución tecnológica para la vigilancia en tiempo real de parámetros clave que afectan la salud de los cuerpos de agua en la región. Financiado por el <b>Consejo Nacional de Ciencia y Tecnología</b> (<a href="https://www.conacyt.gov.py" className="text-sky-500 hover:text-sky-400" target="_blank">CONACYT</a>) de Paraguay.</p>
        <p className="my-4">El proyecto es desarrollado por un equipo de docentes e investigadores de la <b>Facultad de Ciencias y Tecnología</b> (<a href="https://facitec.edu.py" className="text-sky-500 hover:text-sky-400" target="_blank">FACITEC</a>) de la Universidad Nacional de Canindeyú (<a href="https://www.unican.edu.py" className="text-sky-500 hover:text-sky-400" target="_blank">UNICAN</a>), con la participación del Centro Multidisciplinario de Investigaciones Tecnológicas (<a href="https://cemit.una.py/institucional/#sobre-cemit" className="text-sky-500 hover:text-sky-400" target="_blank">CEMIT</a>) de la Universidad Nacional de Asunción como institución asociada.
        </p>
        <p className="my-4">El sistema combinará sensores distribuidos, tecnologías de comunicación inalámbrica y herramientas de software para facilitar la recolección, visualización y análisis de datos, aportando insumos valiosos para la toma de decisiones ambientales.</p>
        <h3 className="mt-6 mb-4 lg:text-3xl sm:text-2xl text-lg lg:mb-3 mb-1 font-semibold">Metodología de Trabajo</h3>
        <p className="my-4">El proyecto se desarrolla en varias fases:</p>
        <div className="ml-4">
          <ol className="list-decimal">
            <li className="my-2"><b>Identificación de los parámetros de calidad y selección de los sensores.:</b> revisión de la literatura con relación a los índices de calidad del agua establecidos nacional e internacional para identificar los parámetros que pueden ser medidos a través de sensores.</li>
            <li className="my-2"><b>Construcción del software.</b> proceso de construcción de la solución informática, desde la definición de los aspectos de hardware y arquitecturas requeridos hasta el desarrollo del sistema informático para el procesamiento, análisis y visualización de los datos obtenidos por medio de sensores.</li>
            <li className="my-2"><b>Validación:</b> verificación del correcto funcionamiento del sistema y de la precisión de los datos obtenidos por los sensores, mediante la recolección de muestras de agua de los ríos y su análisis en laboratorio.</li>
            <li className="my-2"><b>Despliegue:</b> Se desplegará el sistema de software en un servidor propio, utilizando licencias libres y configurado específicamente para este propósito.</li>
          </ol>
        </div>

      </div>
    </section>
  )
}

export default Descripcion
