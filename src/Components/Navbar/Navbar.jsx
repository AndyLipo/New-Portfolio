import { NavLink } from "react-router-dom"
import { Menu, X } from 'lucide-react'; // Para los iconos del menú
import { useState } from "react";


const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: 'Inicio',  to: "/", className: 'show-1 homebutton', isActive: true },
   // { id: 2, name: 'Sobre Mi', to: "/sobreMi", className: 'show-2 aboutbutton' },
    { id: 3, name: 'Proyectos', to: "/projectos", className: 'show-3 projectbutton' },
    { id: 5, name: 'Contacto', to: "/contacto", className: 'show-5 contactbutton' }
  ];

    return (
    <> 
        <header className="container mx-auto px-4 animate-fadeIn">
        <div className="py-6">
        <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="w-1/3">
            <div className="site-branding">
                <NavLink to="/#">
                <h1 className="text-2xl font-bold">Andres Liporace</h1>
                <p>Front-End Developer</p>
                </NavLink>
            </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? (
                <X className="h-6 w-6" />
            ) : (
                <Menu className="h-6 w-6" />
            )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block w-2/3">
            <nav id="nav">
                <ul className="flex justify-end space-x-8">
                {menuItems.map((item) => (
                    <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) => `
                        ${item.className}
                        hover:text-gray-600 transition-colors
                        ${isActive ? 'text-blue-600' : 'text-gray-800'}
                    `}
                    >
                    <li>{item.name}</li>
                    </NavLink>
                ))}
                </ul>
            </nav>
            </div>

            {/* Mobile Navigation */}
            <div 
            className={`
                fixed inset-0 bg-white z-40 md:hidden
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            >
            <nav className="h-full flex items-center justify-center">
                <ul className="space-y-8 text-center">
                {menuItems.map((item) => (
                    <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) => `
                        ${item.className}
                        text-xl hover:text-gray-600 transition-colors block
                        ${isActive ? 'text-blue-600' : 'text-gray-800'}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                    >
                    <li>{item.name}</li>
                    </NavLink>
                ))}
                </ul>
            </nav>
            </div>
        </div>
        </div>
    </header>
    </>
  )
}

export default Navbar