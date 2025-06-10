import { equipo, admin } from "@/app/proyecto/components/equipo_inves_data.json";
import Image from "next/image";

const Equipo = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Nuestro Equipo</h2>
        </div>

        <div className="inline-flex items-center justify-center w-full mb-4">
          <hr className="w-150 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          <span className="absolute px-3 font-medium text-xs md:text-sm text-gray-800 -translate-x-1/2 bg-white left-1/2 rounded-sm dark:text-white dark:bg-gray-500">Equipo de investigación</span>
        </div>

        <div className="grid gap-4 mb-6 lg:mb-16 md:grid-cols-3 grid-cols-2" >
          {
            equipo.map((e, index) => (

              <div key={`equipo_${index}`}>
                <div className="relative overflow-hidden px-6">
                  <Image src={`/img/equipo_imgs/${e.image}`} className="w-25 h-25 md:w-35 md:h-35 mx-auto rounded-full grayscale" width={200} height={200} alt="imagen" />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">{e.name}</p>
                  <p className="text-gray-500 leading-relaxed font-light">{e.role}</p>
                  <div className="mt-2 mb-5 space-x-2">
                    {
                      e.cvpy && (
                        <a href={e.cvpy} target="_blank" className="hover:text-sky-400" title="CVPy">
                          <svg className="inline-block" width="1.8rem" height="1.2rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <text style={{ fontSize: "15px", fontWeight: "bold" }} x="-6" y="18">CVPy</text>
                          </svg>
                        </a>
                      )
                    }
                    {
                      e.orcid && (
                        <a href={e.orcid} target="_blank" className="hover:text-sky-400" title="Orcid">
                          <svg className="inline-block" width="1rem" height="1.2rem" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z" />
                          </svg>
                        </a>
                      )
                    }
                    {
                      e.scholar && (
                        <a href={e.scholar} target="_blank" className="hover:text-sky-400" title="Google Scholar">
                          <svg className="inline-block" width="1rem" height="1.2rem" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg>
                        </a>
                      )
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="inline-flex items-center justify-center w-full mb-4">
          <hr className="w-150 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          <span className="absolute px-3 font-medium text-xs md:text-sm text-gray-800 -translate-x-1/2 bg-white left-1/2 rounded-sm dark:text-white dark:bg-gray-500">Equipo administrativo</span>
        </div>

        <div className="grid gap-4 mb-6 lg:mb-16 md:grid-cols-3 grid-cols-2" >
          {
            admin.map((a, index) => (

              <div key={`equipo_${index}`}>
                <div className="relative overflow-hidden px-6">
                  <Image src={`/img/equipo_imgs/${a.image}`} className="w-25 h-25 md:w-35 md:h-35 mx-auto rounded-full grayscale" width={200} height={200} alt="imagen" />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">{a.name}</p>
                  <p className="text-gray-500 leading-relaxed font-light">{a.role}</p>
                  <div className="mt-2 mb-5 space-x-2">
                    {
                      a.cvpy && (
                        <a href={a.cvpy} target="_blank" className="hover:text-sky-400" title="CVPy">
                          <svg className="inline-block" width="1.8rem" height="1.2rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <text style={{ fontSize: "15px", fontWeight: "bold" }} x="-6" y="18">CVPy</text>
                          </svg>
                        </a>
                      )
                    }
                    {
                      a.orcid && (
                        <a href={a.orcid} target="_blank" className="hover:text-sky-400" title="Orcid">
                          <svg className="inline-block" width="1.8rem" height="1.2rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z" />
                          </svg>
                        </a>
                      )
                    }
                    {
                      a.scholar && (
                        <a href={a.scholar} target="_blank" className="hover:text-sky-400" title="Google Scholar">
                          <svg className="inline-block" width="1.8rem" height="1.2rem" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg>
                        </a>
                      )
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Equipo;


{/* <div key={`equipo_${index}`} className="items-center bg-gray-500 rounded-lg shadow-lg sm:flex border-gray-700"> */ }
{/*   <div> */ }
{/*     <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={`/img/equipo_imgs/${e.image}`} alt="Avatar" /> */ }
{/*   </div> */ }
{/*   <div className="p-5"> */ }
{/*     <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"> */ }
{/*       <a href="#">{e.name}</a> */ }
{/*     </h3> */ }
{/*     <span className="text-gray-500 dark:text-gray-400">{e.role}</span> */ }
{/*     <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{e.description}</p> */ }
{/*     <ul className="flex space-x-4 sm:mt-0"> */ }
{/*       { */ }
{/*         e.cvpy && ( */ }
{/*           <li> */ }
{/*             <a href={e.cvpy} target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white" title="CVPy"> */ }
{/*               <svg className="w-[35px] h-5" width="35px" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"> */ }
{/*                 <text style={{ fontSize: "15px", fontWeight: "bold" }} x="-6" y="18">CVPy</text> */ }
{/*               </svg> */ }
{/*             </a> */ }
{/*           </li> */ }
{/*         ) */ }
{/*       } */ }
{/*       { */ }
{/*         e.orcid && ( */ }
{/*           <li> */ }
{/*             <a href={e.orcid} target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white" title="Orcid"> */ }
{/*               <svg className="w-5 h-5" fill="currentColor" aria-hidden="true" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> */ }
{/*                 <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.823 5.839c0.704 0 1.265 0.573 1.265 1.26 0 0.688-0.561 1.265-1.265 1.265-0.692-0.004-1.26-0.567-1.26-1.265 0-0.697 0.563-1.26 1.26-1.26zM8.864 9.885h1.923v13.391h-1.923zM13.615 9.885h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224zM15.536 11.625v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963z" /> */ }
{/*               </svg> */ }
{/*             </a> */ }
{/*           </li> */ }
{/*         ) */ }
{/*       } */ }
{/*       { */ }
{/*         e.scholar && ( */ }
{/*           <li> */ }
{/*             <a href={e.scholar} target="_blank" className="text-gray-600 hover:text-gray-900 dark:hover:text-white" title="Google Scholar"> */ }
{/*               <svg className="w-5 h-5" fill="currentColor" aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg> */ }
{/*             </a> */ }
{/*           </li> */ }
{/*         ) */ }
{/*       } */ }
{/*     </ul> */ }
{/*   </div> */ }
{/* </div> */ }
