import { Github  } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const ProyectosCuerpo = () => {
  
    const projects = [
        {
          id: 1,
          title: "Proyecto Uno",
          image: "img/1.jpg",
          className: "animate-fadeInRight"
        },
        {
          id: 2,
          title: "Proyecto Dos",
          image: "img/2.jpg",
          className: "animate-fadeInRight delay-100"
        },
        {
          id: 3,
          title: "Proyecto Tres",
          image: "img/3.jpg",
          className: "animate-fadeInRight delay-200"
        },
        {
          id: 4,
          title: "Proyecto Cuatro",
          image: "img/4.jpg",
          className: "animate-fadeInRight delay-300"
        }
      ];
    return (
    <>
        <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap -mx-4">
        {/* Sección de texto */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Mis Proyectos</h2>
            <p className="text-gray-700 mb-6">
            Elegí destacar los proyectos más relevantes de mi trayectoria. <br />
            pero puedes encontrar el resto en mi GitHub.
            </p>
            <a
                href="https://github.com/AndyLipo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#24292f] text-white rounded-lg 
                            hover:bg-[#33363b] transition-colors duration-300"
                >
                <Github className="w-5 h-5 mr-2" /> {/* Ícono a la izquierda */}
                GitHub {/* Texto del botón */}
            </a>
          </div>
        </div>

        {/* Sección de proyectos */}
        <div className="w-full md:w-1/2 px-4">
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`relative group overflow-hidden rounded-lg ${project.className}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 
                              flex items-center justify-center">
                  <h4 className="text-white text-xl font-semibold">
                    <NavLink to={`/project/${project.id}`} className="hover:text-pink-300">
                      {project.title}
                    </NavLink>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProyectosCuerpo