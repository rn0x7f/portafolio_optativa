"use client";

import React, { useState } from 'react';
import { BookPage } from './book-page';
import { BookCover } from './book-cover';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pages = [
  ".", // Portada frontal
  { // Página 1 Índice
    text: "Índice",
    textBold: true,
    textCentered: true,
    indexItems: [
      { title: "1 - Contextualización . . . . . . . . . . . . . 2", page: 2 },
      { title: "  1.1 - Reflexión . . . . . . . . . . . . . . . . . 5", page: 5 },
      { title: "2 - Inmersión & Mockup . . . . . . . . . . . 6", page: 6},
      { title: "  2.1 - Reflexión . . . . . . . . . . . . . . . . . 9", page: 9 },
      { title: "3 - Prototipo . . . . . . . . . . . . . . . . . . . . 10", page: 10 },
      { title: "  3.1 - Reflexión . . . . . . . . . . . . . . . . . 11", page: 11 },
      { title: "4 - Pitch . . . . . . . . . . . . . . . . . . . . . . . 12", page: 12 },
      { title: "  4.1 - Reflexión . . . . . . . . . . . . . . . . . 13", page: 13 },
      { title: "5 - Conclusión . . . . . . . . . . . . . . . . . . 14", page: 14 },
    ],
  },

  { // Página 3 Contextualizacion
    text: "Contextualización",
    textBold: true,
    textCentered: true,
    images: [
      { src: 'images/musica0.png', alt: 'Musica', size: 'w-80 h-90' },
    ],
  },
  {
    text: "Contextualización",
    images: [
      {
        isVideo: true,
        videoId: 'ZAkx7Zc8Mnw',
        size: 'w-80 h-90',
      },
      { size: 'w-1 h-90' },
      { src: 'images/papas1.jpg', alt: 'Musica', size: 'w-15 h-15' },
      { src: 'images/papas2.jpeg', alt: 'Musica', size: 'w-15 h-15' },
      { src: 'images/papas3.jpg', alt: 'Musica', size: 'w-15 h-15' },
      { src: 'images/papas4.jpg', alt: 'Musica', size: 'w-15 h-15' },
    ],
  },
  {
    text: "Contextualización",
    images: [
      {
        isVideo: true,
        videoId: 'wzmaArYBAmU',
        size: 'w-80 h-90',
      },
      { size: 'w-1 h-90' },
      { src: 'images/musica1.png', alt: 'Musica', size: 'w-80 h-90' },
    ],
  },
  {
    text: "Contextualización - Reflexión",
    textBold: true,
    textCentered: true,
    content: "Estas actividades me sirvieron para darme cuenta de cómo la música puede ser utilizada para manipularnos desde temprana edad, moldeando nuestros hábitos de consumo a través de comerciales en televisión. Es alarmante cómo estas estrategias nos convierten en dependientes de productos ultraprocesados, afectando nuestra salud física y fomentando la inactividad. En un país como México, con altos índices de obesidad e inactividad física, es crucial reconsiderar cómo permitimos que influencias tan poderosas afecten nuestro bienestar. Debemos tener más conciencia sobre el tiempo que pasamos frente a las pantallas y los mensajes que consumimos de forma implícita a través de este tipo de medios.",
    contentBold: false,
    contentCentered: false,
  },




  { // Pagina 7 Inmersion y Mockup
    text: "Inmersión & Mockup",
    textBold: true,
    textCentered: true,
    images: [
      { src: 'images/mockup1.png', alt: 'Mockup inicial', size: 'w-80 h-90' },
      { size: 'w-1 h-90' },
      { src: 'images/mockup0.jpg', alt: 'Mockup inicial', size: 'w-80 h-90' }
    ],
  },
  {
    text: "Inmersión & Mockup",
    images: [
      { src: 'images/mockup2.png', alt: 'Mockup inicial', size: 'w-80 h-90' },
      { size: 'w-1 h-90' },
      { src: 'images/mockup3.png', alt: 'Mockup inicial', size: 'w-80 h-90' },
    ],
  },
  {
    text: "Inmersión & Mockup",
    images: [
      { src: 'images/proto1.jpeg', alt: 'Mockup inicial', size: 'w-25 h-30' },
      { src: 'images/proto2.jpeg', alt: 'Mockup inicial', size: 'w-25 h-30' },
      { src: 'images/proto3.jpeg', alt: 'Mockup inicial', size: 'w-25 h-30' },
      { src: 'images/proto4.jpeg', alt: 'Mockup inicial', size: 'w-25 h-30' },
    ],
  },
  {
    text: "Inmersión & Mockup - Reflexión",
    textBold: true,
    textCentered: true,
    content: "Estas dos actividades partieron de la base del uso del proceso de Design thinking, para el cual buscamos entender a fondo el problema planteado para después proponer soluciones, apesar de que esto suele hacerse en equipos, esta vez nos tocó hacerlo de forma individual, idea que para mí resultó ser más atractiva, pues me permitió desarrollar la actividad en mi área de interés, buscando una solución para que los programadores hagan ejercicio. Si bien era un tema complicado, creo que logré desarrollar una solución viable, pues la aplicación que diseñé convertía el ejercicio en parte de la rutina del programador, facilitando la implementación en grandes equipos de trabajo y demostrando así que el ejercicio puede ser parte de la vida diaria de cualquier persona.",
    contentBold: false,
    contentCentered: false,
  },



  { text: "Prototipo", // Pagina 11 Prototipo
    textBold: true,
    textCentered: true,
    images: [
      {
        isVideo: true,
        videoId: 'bn_ONHElndQ',
        size: 'w-80 h-90',
      },
      { size: 'w-1 h-90' },
      { src: 'images/prototype0.jpg', alt: 'Vista principal', size: 'w-80 h-90' },
      { size: 'w-1 h-90' },
    ],
   },
   {
    text: "Prototipo - Reflexión",
    textBold: true,
    textCentered: true,
    content: "Probar el prototipo confirmó que este enfoque, que condiciona las acciones laborales a la realización de ejercicio, no solo es viable, sino también efectivo para fomentar hábitos saludables.  Me di cuenta de que el problema de la inactividad no radica en la falta de tiempo, sino en cómo priorizamos nuestras actividades. Al integrar el ejercicio como un requisito para avanzar en tareas profesionales, estamos eliminando excusas y promoviendo un cambio positivo en la rutina de quienes suelen pasar horas frente a una pantalla. Esta solución demuestra que es posible motivar a las personas de manera creativa, logrando un impacto significativo en su bienestar físico sin sacrificar su productividad.",
    contentBold: false,
    contentCentered: false,
  },





  {
    text: "Pitch",
    textBold: true,
    textCentered: true,
    images: [
      { src: 'images/yo.jpg', alt: 'Prototipo final', size: 'w-80 h-50' },
      { size: 'w-1 h-90' },
      { src: 'images/pitch.webp', alt: 'Prototipo final', size: 'w-80 h-50' },
    ],
  },
  {
    text: "Pitch - Reflexión",
    textBold: true,
    textCentered: true,
    content: "Esta actividad me enseñó lo importante que es desarrollar la habilidad de hablar en público, no solo para enfrentar multitudes, sino también para comunicar ideas de manera efectiva. Comprendí que el pitch no es únicamente una presentación, sino una oportunidad para conectar con la audiencia y convencerla del valor de nuestra propuesta. Además, me di cuenta de la facilidad que tenemos para proponer soluciones innovadoras que realmente puedan ayudar a las personas. Este ejercicio fortaleció mi confianza para defender mis ideas y me inspiró a seguir buscando maneras de resolver problemas cotidianos a través del uso de la creatividad.",
    contentBold: false,
    contentCentered: false,
  },





  { text: "Conclusion",
    textBold: true,
    textCentered: true,
    content: "A lo largo de este último periodo hicimos todo tipo de actividades, desde analizar cómo los medios influyen en nuestros hábitos, hasta desarrollar prototipos que promuevan el ejercicio, personalmente aprendí que la solución a este problema no es cuestión faltas de tiempo, sino de cambiar prioridades y rutinas. Dicho de otra forma, tratar de forzar que el ejercicio sea una necesidad. Descubrí que la creatividad y la innovación pueden ser herramientas poderosas para motivar a las personas a adoptar estilos de vida más saludables. Enfrentar el reto de comunicar estas ideas a una audiencia, ya sea a través de un pitch o al probar prototipos, me permitió entender la importancia del desarrollo de este tipo de habilidades sociales. Este proyecto no solo fortaleció mis habilidades para hacer una presentación, sino que también me hizo reflexionar sobre cómo puedo usar la tecnología como un medio para generar un impacto positivo en la sociedad.",
   },
   { text: "Conclusion",
    textCentered: true,
    content: "Además para este ultimo portafolio que buscaba observar la creatividad mientras plasmabamos lo que nos hacia ser nosotros mismos, decidí hacer el portafolio escribiendo código a mano, desarrollando una página web desde cero sin utilizar ningún tipo de plantilla ni cosas prehechas, para dar cierre a esta última optativa de mi carrera con un proyecto que me permita hacer uso de las habilidades que he adquirido a lo largo de mi carrera como Ingeniero en Tecnologías Computacionales, enfrentando así mi disgusto por la creación de interfaces gráficas.",
    images: [
      { src: 'images/finalcode.png', alt: 'Prototipo final', size: 'w-80 h-50' },
    ],
   },
];

export default function OpenBookBackground() {
  const [currentPage, setCurrentPage] = useState(-1);

  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage === -1) {
      setCurrentPage(0);
    } else if (currentPage >= 0 && currentPage < totalPages - 2) {
      setCurrentPage(currentPage + 2);
    } else if (currentPage >= totalPages - 2) {
      // Move to back cover
      setCurrentPage(-2);
    }
  };

  const prevPage = () => {
    if (currentPage === -2) {
      setCurrentPage(totalPages % 2 === 0 ? totalPages - 2 : totalPages - 1);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 2);
    } else if (currentPage === 0 || currentPage === 1) {
      setCurrentPage(-1);
    }
  };

  const goToPage = (pageNumber: number) => {
    const targetPage =
      pageNumber >= 0 && pageNumber < totalPages
        ? pageNumber % 2 === 0
          ? pageNumber
          : pageNumber - 1
        : 0;
    setCurrentPage(targetPage);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('images/wood-texture.jpg')`,
      }}
    >
      <div className="book-container w-full max-w-4xl aspect-[3/2] shadow-2xl relative bg-transparent rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === -1 && (
            <motion.div
              key="frontCover"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <BookCover
                title="Situación problema: La inactividad física en México"
                author="Renato García Morán"
                isBackCover={false}
              />
            </motion.div>
          )}
          {currentPage === -2 && (
            <motion.div
              key="backCover"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <BookCover
                title="Proyecto final. Quinto semestre. Innovación y procesos creativos"
                author="25/11/2024"
                isBackCover={true}
              />
            </motion.div>
          )}
          {currentPage >= 0 && (
            <motion.div
              key={currentPage}
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.5 }}
              className="flex w-full h-full"
            >
              <BookPage
                content={pages[currentPage]}
                isRightPage={false}
                pageNumber={currentPage}
                onNavigate={goToPage}
              />
              <BookPage
                content={pages[currentPage + 1] || {}}
                isRightPage={true}
                pageNumber={currentPage + 1}
                onNavigate={goToPage}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={prevPage}
          disabled={currentPage === -1}
          className="absolute bottom-4 left-4 bg-amber-200 p-2 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === -2}
          className="absolute bottom-4 right-4 bg-amber-200 p-2 rounded-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}