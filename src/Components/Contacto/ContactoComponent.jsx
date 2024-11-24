import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const ContactoComponente = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    emailjs
      .sendForm(
        'service_9a91xve',
        'template_m3mtco9',
        form.current,
        {
          publicKey: 'Bw4EFP1pI55OwvzSn',
        }
      )
      .then(
        (result) => {
          setStatus({
            submitting: false,
            success: true,
            error: null
          });
          // Limpiar el formulario
          form.current.reset();
        },
        (error) => {
          setStatus({
            submitting: false,
            success: false,
            error: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">¿Te interesaría trabajar conmigo?</h2>
        <p className="text-gray-600 mb-6 animate-fadeIn">Sentite libre de escribir</p>
        
        {/* Social Media Links */}
        <ul className="flex justify-center space-x-4 animate-fadeIn">
          {/* <li>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/in/andres-liporace/" target='_blank' className="text-gray-600 hover:text-pink-500 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AndyLipo" target='_blank' className="text-gray-600 hover:text-purple-500 transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faShareAlt} className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap -mx-4">
        {/* Map Section */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 animate-fadeIn">
          <div className="bg-gray-200 h-96 rounded-lg">
            <div id="map_canvas" className="w-full h-full rounded-lg"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 px-4 animate-fadeIn">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-6">Dejame tu consulta y te responderé a la brevedad</h4>
            
            {/* Status Messages */}
            {status.success && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                ¡Mensaje enviado exitosamente!
              </div>
            )}
            {status.error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {status.error}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Tu email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Describe tu consulta"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 px-6 rounded-lg text-white transition-colors duration-300
                  ${status.submitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'}`}
              >
                {status.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoComponente;