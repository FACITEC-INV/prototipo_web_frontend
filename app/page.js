import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="lg:text-3xl sm:text-2xl text-1xl font-bold text-gray-800 py-3 mb-6">Sistema de monitoreo de calidad de ríos</h1>
      <div className="columns-2">
        <Image
          src="/img/rio_carapa.jpg"
          alt="Rio carapa"
          width={300}
          height={20}
          className="w-auto rounded-lg shadow-lg shadow-gray-500"
        />
        <div>
          <h3 className="lg:text-2xl sm:text-1xl lg:my-3 m-1 font-semibold">Descripción del sistema</h3>
          <p className="lg:text-base sm:text-[12px]">
            Este sistema forma parte del proyecto de investigación PINV01-267, financiado por el Consejo Nacional de Ciencia y Tecnología (CONACYT) del Paraguay. Desarrollado como herramienta de apoyo para el monitoreo de la calidad del agua en ríos, facilita el acceso a información ambiental confiable, fomenta una gestión informada y refuerza la preservación de los recursos hídricos.
          </p>
        </div>
      </div>


    </div >
  );
}
