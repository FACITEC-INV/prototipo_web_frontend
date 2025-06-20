import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-[65vh] bg-gray-100">
      <div className="card card-dash bg-gray-300 w-auto h-auto sm:w-130 sm:h-60 mt-2">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" className="text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-error-404"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8v3a1 1 0 0 0 1 1h3" /><path d="M7 8v8" /><path d="M17 8v3a1 1 0 0 0 1 1h3" /><path d="M21 8v8" /><path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" /></svg>
            Página no encontrada</h2>
          <p className="text-xl">La página que estás buscando no existe.</p>
          <div className="card-actions justify-end">
            <Link href="/" className="btn btn-error btn-soft">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
