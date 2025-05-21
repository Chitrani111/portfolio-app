import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand*/}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2x1 font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  CB
                </span>
              </div>
              <div className="ml-4">
                <span className="text-white font-semibold text-lg">
                  Chitrani Banerjee
                </span>
              </div>
            </div>
            {/*Desktop Navigator Links*/}
            <div className="hidden md:block">
              <ul className="flex space-x-2">
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-mediun">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-mediun">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-mediun">
                    Tracer
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-mediun">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-mediun">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Navigator */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuopen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration">
                About
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration">
                Skills
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration">
                Tracer
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration">
                Projects
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration">
                Contacts
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
