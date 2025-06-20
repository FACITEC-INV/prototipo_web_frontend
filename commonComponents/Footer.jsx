import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto lg:w-full max-w-container px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div className="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-5 md:grid-cols-2">
        <p className="text-sm/6 text-gray-600 max-md:text-center">
          <a href="https://unican.edu.py" target="_blank">© UNICAN</a> -
          <a href="https://facitec.edu.py" target="_blank">FACITEC</a> 2025.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 text-gray-500 md:justify-end">
          <Link href="/politicas">Politicas de privacidad</Link>
          <div className="h-4 w-px bg-gray-200"></div>
          <Link href="/terminos">Terminos de uso</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
