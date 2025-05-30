import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-3 py-8 text-gray-800">
      <h1 className="lg:text-3xl sm:text-2xl text-1xl font-bold text-gray-800 py-3 mb-6">Sistema de monitoreo de calidad de ríos</h1>
      <div className="flex flex-row sm:flex-nowrap flex-wrap xl:mt-15 lg:mt-12 sm:mt-10 mt-7">
        <div className="lg:basis-1/2 sm:basis-1/2 basis-1/1">
          <Image
            src="/img/rio_carapa.jpg"
            alt="Rio carapa"
            width={400}
            height={20}
            className="w-auto rounded-lg shadow-lg shadow-gray-500"
          />
        </div>
        <div className="lg:basis-1/2 sm:basis-1/2 basis-1/1 sm:ml-5 ml-0 sm:mt-0 mt-5">
          <h3 className="lg:text-3xl sm:text-2xl lg:mb-3 mb-1 font-semibold">Proyecto colaborativo</h3>
          <p>
            Este sistema forma parte del proyecto de investigación PINV01-267, financiado por el Consejo Nacional de Ciencia y Tecnología (<a href="https://www.conacyt.gov.py/" className="text-sky-600" target="_blank">CONACYT</a>) del Paraguay. Desarrollado como herramienta de apoyo para el monitoreo de la calidad del agua en ríos, facilita el acceso a información ambiental confiable, fomenta una gestión informada y refuerza la preservación de los recursos hídricos.
          </p>
        </div>
      </div>

      <div className="xl:mt-15 lg:mt-12 sm:mt-10 mt-7">
        <h3 className="lg:text-3xl sm:text-2xl lg:mb-3 mb-1 font-semibold">Objetivos del sistema</h3>
        <ul className="list-disc max-w-[95%] m-auto">
          <li>Ofrecer datos actualizados desde sensores instalados en puntos estratégicos.</li>
          <li>Apoyar a investigadores, autoridades y ciudadanía con información accesible y transparente.</li>
          <li>Contribuir con la detección temprana de eventos que puedan comprometer la salud ambiental.</li>
          <li>Fomentar políticas públicas sostenibles basadas en evidencia científica.</li>
        </ul>
      </div>

      <div className="flex flex-row sm:flex-nowrap flex-wrap-reverse xl:mt-15 lg:mt-12 sm:mt-10 mt-7">
        <div className="lg:basis-1/2 sm:basis-1/2 basis-1/1 sm:mr-5  mr-0 sm:mt-0 mt-5">
          <h3 className="lg:text-3xl sm:text-2xl lg:mb-3 mb-1 font-semibold">Proyecto colaborativo</h3>
          <p>
            Desarrollado por investigadores y docentes de la Facultad de Ciencias y Tecnología, con el apoyo del CONACYT, este sistema representa un esfuerzo interdisciplinario para cuidar el agua, nuestro recurso más vital. El proyecto cuenta además con la participación del Centro Multidisciplinario de Investigaciones Tecnológicas (<a href="https://cemit.una.py/institucional/#sobre-cemit" className="text-sky-600" target="_blank">CEMIT</a>) de la Universidad Nacional de Asunción como institución asociada.
          </p>
        </div>
        <div className="lg:basis-1/2 sm:basis-1/2 basis-1/1">
          <Image
            src="/img/rio_hehui.jpg"
            alt="Rio carapa"
            width={400}
            height={20}
            className="w-auto rounded-lg shadow-lg shadow-gray-500"
          />
        </div>
      </div>

      <div className="xl:mt-15 lg:mt-12 sm:mt-10 mt-7">
        <h3 className="lg:text-3xl sm:text-2xl lg:mb-3 mb-1 font-semibold">Accesos rápidos</h3>
        <ul className="list-disc max-w-[95%] m-auto">
          <li>Consulta de datos en tiempo real. <Link href="/monitoreo"><img src="/img/redirect.svg" width={20} height={20} alt="redirect" className="inline bg-sky-600 hover:bg-sky-900 rounded-sm p-px border" /></Link></li>
          <li>Conocé más sobre el proyecto. <Link href="/proyecto"><img src="/img/redirect.svg" width={20} height={20} alt="redirect" className="inline bg-sky-600 hover:bg-sky-900 rounded-sm p-px border" /></Link></li>
          <li>Equipo de investigación. <Link href="/equipo"><img src="/img/redirect.svg" width={20} height={20} alt="redirect" className="inline bg-sky-600 hover:bg-sky-900 rounded-sm p-px border" /></Link></li>
          <li>Documentación técnica de la API pública. <Link href="/api-docs"><img src="/img/redirect.svg" width={20} height={20} alt="redirect" className="inline bg-sky-600 hover:bg-sky-900 rounded-sm p-px border" /></Link></li>
        </ul>
      </div>

    </div >
  );
}
