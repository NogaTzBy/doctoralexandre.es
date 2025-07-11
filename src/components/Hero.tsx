import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
      
      <div className="relative container mx-auto px-4 lg:px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-teal-500/20 backdrop-blur-sm text-teal-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-400/30">
            Solo para mujeres mayores de 35 años
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            ¿Quieres más energía y 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> dejar de hincharte?</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-6 leading-relaxed font-light max-w-3xl mx-auto">
            28 días para dejar atrás para siempre la hinchazón y el cansancio, 
            <span className="font-semibold text-teal-300"> gracias a la epigenética.</span>
          </p>

          <p className="text-base md:text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sin dietas restrictivas. Sin análisis genéricos. Y con protección médica: si en 3 meses no hay mejora, te devolvemos el dinero. Sin preguntas.
          </p>

          <div className="max-w-4xl mx-auto">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
              <iframe 
                src="https://player.vimeo.com/video/1099391022?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&like=0&watchlater=0&share=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                title="VSL ALEX DREOLMOS (2)"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;