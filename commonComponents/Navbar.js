import Link from "next/link";
import Image from "next/image";
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="flex justify-center items-center lg:px-6 px-0 py-0 border-b-1 border-b-zinc-300">
          <a href="https://facitec.edu.py" className="flex justify-between lg:items-end items-center">
            <Image src="/img/unican.png" width={130} height={100} className="xl:w-33 lg:w-30 sm:w-22 w-12" alt="unican" />
            <Image src="/img/facitec.png" width={130} height={100} className="xl:w-32 lg:w-29 sm:w-22 w-12" alt="facitec" />
          </a>
          <a href="https://conacyt.com.py" className="flex justify-between xl:items-center lg:items-center items-center">
            <Image src="/img/conacyt.png" width={450} height={30} className="xl:w-130 lg:w-105 sm:w-75 w-38" alt="conacyt" />
            <Image src="/img/prociencia.png" width={250} height={100} className="xl:w-70 lg:w-60 sm:w-45 w-25" alt="prociencia" />
            <Image src="/img/feei.png" width={80} height={100} className="xl:w-22 lg:w-22 sm:w-12 w-10" alt="feei" />
          </a>
        </div>
        <div className="lg:px-6 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">

          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
              <ul className="lg:flex items-end justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><Link className="lg:p-3 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/">Inicio</Link></li>
                <li><Link className="lg:p-3 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/monitoreo">Monitoreo</Link></li>
                <li><Link className="lg:p-3 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/api-docs">API</Link></li>
                <li><Link className="lg:p-3 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/proyecto">Sobre el proyecto</Link></li>
                <li><Link className="lg:p-3 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="/login">Login</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
