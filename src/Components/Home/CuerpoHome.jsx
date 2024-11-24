import { Trophy, Award, Wand2, Monitor } from 'lucide-react'; // Importamos iconos similares
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

export const CuerpoHome = () => {
  return (
    <div id="menu-1" className="container mx-auto px-4 py-12">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">
      Sobre mi
      </h2>
      
      <p className="max-w-2xl mx-auto mb-8 animate-fadeIn">
      Soy un apasionado por desarrollar productos y páginas.<br />
      Mi interés por la programación comenzó cuando tuve la oportunidad de capacitarme para enseñar programación orientada a objetos a niños de nivel primario.
      </p>

      <ul className="flex justify-center gap-8 animate-fadeIn">
        <li className="p-4 hover:scale-110 transition-transform">
        <FontAwesomeIcon icon={faReact} className="text-blue-500 text-4xl" />
        </li>
        <li className="p-4 hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faJs}  className="text-yellow-500 text-4xl" />
        </li>
        <li className="p-4 hover:scale-110 transition-transform">
        <FontAwesomeIcon icon={faHtml5}  className="text-orange-500 text-4xl" />
        </li>
        <li className="p-4 hover:scale-110 transition-transform">
        <FontAwesomeIcon icon={faGithub}  className="text-black-500 text-4xl" />
        </li>
      </ul>
    </div>
  </div>
  )
}
