import ImgMia from '../../assets/Imagen-portfolio.jpg'
export const ProyectosTitulo = () => {
  return (
    <div id="menu-1" className="container mx-auto px-4 py-12">
  <div className="flex flex-wrap items-center">
    {/* Sección de texto */}
    <div className="w-full md:w-2/3 text-left -mt-52">
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn ml-32">
      Mi historia
      </h2>

      <p className="max-w-2xl mx-auto mb-8 animate-fadeIn text-left ml-8">
        Soy un apasionado por desarrollar productos y páginas.
        <br /> Mi interés por la programación comenzó cuando mecapacitaron para enseñar programación orientada a objetos a niños de nivel primario.
        <br /> Luego tuve la oportunidad de formarme a través de distintos cursos para el desarrollo Web. 
        <br /> Por último, pude participar de la pasantía brindada por el Polo it, como desarrollador front-end. Mentoreada por Globant Inc.
      </p>
    </div>

    {/* Espacio para la imagen */}
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src={ImgMia}
        alt="Sobre mí"
        className="rounded-xl shadow-lg max-w-full h-auto"
      />
    </div>
  </div>
</div>

  )
}
