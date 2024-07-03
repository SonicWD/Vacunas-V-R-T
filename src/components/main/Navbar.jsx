import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-opacity-75 min-h-20 bg-pink-200 relative z-20 w-full">
      <a className="text-black mx-4" href="#">
        Vacunación Colombia <br />
        <span className="font-bold text-lg">¡Vacúnate, protege a los que amas!</span>
      </a>
      <button className="lg:hidden">
        <ion-icon name="menu-outline" className="text-black text-2xl"></ion-icon>
      </button>
      <div className="hidden lg:flex lg:items-center">
        <ul className="flex space-x-4">
          <li><a className="text-black lead" href="inicio.html">Inicio</a></li>
          <li><a className="text-black lead" href="index.html">Inicio Sesión</a></li>
          <li><a className="text-black lead" href="registrarse.html">Registrarse</a></li>
          <li><a className="text-black lead" href="nosotros.html">Nosotros</a></li>
          <li className="relative group">
            <a className="text-black lead" href="#" role="button">
              <ion-icon name="menu-outline" className="text-black text-2xl"></ion-icon>
            </a>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white">
              <li><a className="block px-4 py-2" href="inicio.html">Inicio</a></li>
              <li><a className="block px-4 py-2" href="index.html">Iniciar Sesión</a></li>
              <li><a className="block px-4 py-2" href="inicio-sesion.html">Registrarse</a></li>
              <li><a className="block px-4 py-2" href="nosotros.html">Nosotros</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
