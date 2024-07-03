import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

function Sidebar() {
    return (
      <div className="hidden lg:flex lg:w-1/12 border-r border-white border-opacity-10 fixed top-0 left-0 h-full z-10 bg-pink-200">
        <div className="flex h-full w-full">
          <ul className="flex flex-col justify-center items-center space-y-8 w-full">
            <li className="flex flex-col items-center">
              <FaInstagram className="text-black text-2xl mb-2" />
              <a href="#" className="text-black">Instagram</a>
            </li>
            <li className="flex flex-col items-center">
              <FaFacebook className="text-black text-2xl mb-2" />
              <a href="#" className="text-black">Facebook</a>
            </li>
            <li className="flex flex-col items-center">
              <FaYoutube className="text-black text-2xl mb-2" />
              <a href="#" className="text-black">YouTube</a>
            </li>
            <li className="flex flex-col items-center">
              <FaTwitter className="text-black text-2xl mb-2" />
              <a href="#" className="text-black">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Sidebar;
