import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-2/5">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-xl border-4 border-white">
                <img 
                  src="/whatsapp image 2025-05-20 at 10.48.32 am.jpeg"
                  alt="Dr. Alexandre" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800">Dr. Alexandre</h3>
                <p className="text-lg text-teal-600 mt-2">Médico especializado en salud digestiva y epigenética clínica</p>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 leading-tight">¿Quién soy?</h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Soy el Dr. Alexandre, médico especializado en salud digestiva y epigenética clínica.
                </p>
                <p>
                  Y antes de dedicarme a esto, también fui paciente, como tú, durante más de 14 años.
                </p>
                <p>
                  Durante más de una década viví con hinchazón, digestiones lentas, falta de energía, y un cansancio inexplicable… mientras todos mis análisis salían "normales".
                </p>
                <p>
                  Fue ese camino personal, lleno de frustración y falta de respuestas, lo que me llevó a formarme en medicina integrativa, longevidad y epigenética avanzada.
                </p>
                <p>
                  Porque si yo no encontraba una solución dentro del sistema tradicional, tenía que buscar fuera.
                </p>
                <p>
                  Hoy, gracias a esa búsqueda, he acompañado literalmente a miles de mujeres en el mismo proceso.
                </p>
                <p>
                  He dado conferencias en congresos médicos internacionales, aparecido en medios como La Vanguardia, ABC, El Español, Telva o El Confidencial, y trabajo con pacientes del deporte profesional, del ámbito institucional y personas que llevan años sin encontrar respuestas.
                </p>
                <p className="font-bold text-teal-700 text-lg">
                  Pero sobre todo, sigo recordando lo que me impulsó a empezar: No conformarme con vivir a medias.
                </p>
                <p className="font-bold text-teal-700 text-lg">
                  Y si estás aquí, probablemente tú tampoco quieras hacerlo.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Mi equipo</h3>
            <div className="rounded-2xl overflow-hidden mb-6">
              <img 
                src="/whatsapp image 2025-05-20 at 10.48.14 am.jpeg" 
                alt="Equipo médico del Dr. Alexandre" 
                className="w-full h-auto max-h-[600px] object-contain object-center"
              />
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              Trabajo junto a un equipo multidisciplinar de profesionales especializados en salud digestiva y epigenética, para ofrecerte el mejor cuidado posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;