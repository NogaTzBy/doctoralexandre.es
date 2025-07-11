import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  "/1.jpeg",
  "/2.jpeg", 
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
  "/8.jpeg",
  "/9.jpeg",
  "/10.jpeg",
  "/11.jpeg",
  "/12.jpeg"
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800 leading-tight">
            Lo que dicen nuestras 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> pacientes</span>
          </h2>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex justify-center">
              <div className="w-full max-w-lg">
                <img 
                  src={testimonialImages[activeIndex]} 
                  alt={`Testimonio ${activeIndex + 1}`} 
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonialImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-teal-500' : 'bg-teal-200'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;