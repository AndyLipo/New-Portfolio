import { AboutComponent } from "../../Components/About/About";

import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <> 
      <div className="bg-[#32353a] min-h-screen flex items-center justify-center">
    {/* Contenedor gris fijo con esquinas redondeadas */}
    <div className="bg-[#b7bcbe] rounded-bl-[80px] rounded-tr-[80px] shadow-lg w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
      {/* Navbar fijo */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* Contenido desplazable sin barra de scroll visible */}
      <main className="flex-1 overflow-y-auto hide-scrollbar">
        <AboutComponent />
      </main>
    </div>
  </div>

    </>
  );
};

export default About;
