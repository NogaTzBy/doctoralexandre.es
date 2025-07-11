import React from 'react';
import { FileSpreadsheet, Users, VideoIcon, BookOpen, HeartPulse, ClipboardCheck } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="group bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-2">
    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-4 text-slate-800 group-hover:text-teal-700 transition-colors duration-300 leading-tight">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Test epigenético completo",
      description: "Análisis de más de 800 marcadores que revelan qué está afectando tu salud a nivel celular y pasos exactos a seguir."
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Consulta médica personalizada",
      description: "Interpretación de resultados y definición de un plan adaptado específicamente a tus necesidades."
    },
    {
      icon: <Users size={24} />,
      title: "Sesiones con especialistas",
      description: "Terapeuta y nutricionista clínica junto a los demás preinscritos, enfocadas en digestión, energía y ansiedad digestiva."
    },
    {
      icon: <VideoIcon size={24} />,
      title: "Formación grabada",
      description: "Para que entiendas lo que pasa en tu cuerpo y sepas cómo sostener tu mejora a largo plazo."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Material complementario",
      description: "PDF y videos con recetas, guías prácticas y rutinas adaptadas a tu caso particular."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Seguimiento por 3 meses",
      description: "Acompañamiento con el Dr. Alexandre y su equipo para que no estés sola en el proceso."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-slate-800 leading-tight">
            ¿Qué incluye el 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> programa?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Este es un plan clínico y personalizado a tus necesidades. Con el siguiente objetivo: 
            <span className="font-bold text-teal-700"> Que tengas más energía y dejes de hincharte.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-100 shadow-lg">
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              Todo diseñado para que sepas qué hacer, cómo hacerlo y por qué, sin dietas extremas ni soluciones genéricas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;