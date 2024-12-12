import React from 'react';
import FaqItem from '../molecules/FaqItem';

const FaqSection = () => {
  const faqData = [
    {
      question: '¿Puedo cancelar la suscripción en cualquier momento?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Cuando me llega la caja a casa?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Cómo seleccionáis los vinos de la caja?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿El sistema aprende de mis gustos?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Cómo es eso de que hay dos vinos que me gustarán y uno que me sorprenderá?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Puedo regalar Vineo a un amigo o familiar?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Qué son los Vineo Coins?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Cómo puedo saber los vinos que ya he probado?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: '¿Qué puedo esperar de Vineo en el futuro?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="bg-white py-2 px-8">
      <h2 className="text-4xl font-bold text-center text-vineogray mb-8">
        Preguntas Frecuentes
      </h2>
      {/* Centering text below the heading */}
      <div className="text-2xl font-normal text-center text-vineoblack mb-8 mx-auto max-w-4xl">
        Aquí te resolvemos tus dudas, pero si aún tienes alguna que no se soluciona con esta sección,
        no dudes en ponerte en contacto con nosotros a través del Whatsapp
      </div>

      <div className="flex flex-col justify-between font-domine font-normal text-vineoblack text-sm text-center mx-20">
        {faqData.map((faq, index) => (
          
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
