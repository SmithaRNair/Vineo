'use client';
import React, { useState } from 'react';
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaqItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white py-10 mt-10 px-8">
      <div className="flex flex-col w-full justify-center items-center max-w-full">
        <h2 className="text-5xl  font-bold font-Domine text-center text-vineogray mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="flex justify-center mt-2 items-center text-[1.7rem] font-normal font-Domine text-center tracking-tight leading-7 text-vineoblack mb-8 mx-10 max-w-5xl">
          Aquí te resolvemos tus dudas, pero si aún tienes alguna que no se soluciona con esta sección,
          no dudes en ponerte en contacto con nosotros a través del Whatsapp
        </div>
      </div>

      <div className="flex flex-col justify-between font-domine font-normal text-vineoblack text-sm text-center mx-20">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFaqItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;