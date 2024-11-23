
export const AboutComponent = () => {
  
  const workItems = [
    {
      id: 1,
      image: "img/a1.jpg",
      title: "HAPPY WORKING WITH US",
      description: "Sed sagittis nunc vel tellus ultricies auctor. Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos. Integer eleifend tellu.",
      animationClass: "animate-fadeInLeft"
    },
    {
      id: 2,
      image: "img/a2.jpg",
      title: "OUR COMPANY BACKGROUND",
      description: "Sed sagittis nunc vel tellus ultricies auctor. Class aptent taciti sociosqu ad litora torquent per conubia, per inceptos himenaeos. Integer eleifend tellu.",
      animationClass: "animate-fadeInRight"
    }
  ];

  return (
    <>
      <main id="menu-2" className="container mx-auto px-4 py-16">
      {/* Our Story Section */}
      <section className="our-story relative mb-24">
        {/* Background element */}
        <div className="story-bg absolute inset-0 animate-fadeIn" />
        
        <article className="relative max-w-2xl mx-auto animate-fadeInRight">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Sobre mi</h2>
            <p className="text-gray-700">
            Soy un apasionado por desarrollar productos y páginas.<br />
            Mi interés por la programación comenzó cuando tuve la oportunidad de capacitarme para enseñar programación orientada a objetos a niños de nivel primario.
            </p>
          </div>
        </article>
      </section>

      {/* Our Work Section */}
      <section className="our-offers relative">
        {/* Background element */}
        <div className="offer-bg absolute inset-0 animate-fadeIn" />
        
        <header className="mb-16 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold animate-fadeInDown">OUR WORK</h2>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {workItems.map((item) => (
            <article 
              key={item.id} 
              className={`offer-item ${item.animationClass}`}
            >
              <figure className="mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </figure>
              <div className="offer-content text-center relative px-8 py-6">
                {/* Decorative elements */}
                <span className="offer-left absolute left-0 top-1/2 -translate-y-1/2">
                  <i className="w-4 h-4 bg-gray-300" />
                </span>
                <span className="offer-right absolute right-0 top-1/2 -translate-y-1/2">
                  <i className="w-4 h-4 bg-gray-300" />
                </span>
                
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    </>
  )
}
