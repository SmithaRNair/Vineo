
import AlgoritmoSection from '@/components/organisms/AlgoritmoSection';
import AprendizajeSection from '@/components/organisms/AprendizajeSection';
import FaqSection from '@/components/organisms/FaqSection';
import Footer from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import LandingSection from '@/components/organisms/LandingSection';
import NewsletterSection from '@/components/organisms/NewsletterSection';
import SubscriptionSection from '@/components/organisms/SubscriptionSection';
import ThirdSection from '@/components/organisms/ThirdSection';
import VineoCoinsSection from '@/components/organisms/VineoCoinsSection';
import { readConfigFile } from 'typescript';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LandingSection />
      <ThirdSection />
      <AlgoritmoSection />
      <AprendizajeSection />
      <VineoCoinsSection />
      <SubscriptionSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;

// // src/app/LandingPage.tsx

// import React from 'react';
// import Image from 'next/image';
// import { IMAGES } from '@/constants/AppConst';

// const LandingPage: React.FC = () => {
// return (
//         <div className="bg-[#FEFDFC]">
//             {/* Header Section with Logo */}
//             <header className="flex items-center p-4">
//                 <Image src="/images/logo.png" alt="Vineo Logo" width={150} height={50} />
//             </header>

//             {/* Main Content Section */}
//             <main className="px-4 py-10">

//              {/* Inline Section for Text and Wine Images */}
//               <section className="w-full bg-gray-50 flex flex-col items-left py-10">
//                 <h1 className="text-4xl font-bold text-left">Descubre el vino perfecto para ti</h1>

//                   <div className="max-w-md p-6 bg-white  rounded-lg text-left mb-6">
//                       <p className="mt-2 text-left">
//                          Únete a Vineo, haz match con vinos que encajan con tus gustos gracias a nuestras recomendaciones personalizadas

//                       </p>

//                       <p className="mt-2 text-lg">
//                       Sorpréndete con nuevos sabores y experiencias inolvidables
//                       </p>
//                       <button className="mt-4 px-6 py-2 bg-[#F78A79] text-white rounded shadow-lg">
//                           Empieza
//                       </button>
//                   </div>
//                   <div className="w-full flex justify-center">
//                       <Image
//                           src="/images/wines.png"
//                           alt="Wines Collection"
//                           layout="intrinsic"
//                           width={2191} // Replace with the actual width of your image
//                           height={650} // Replace with the actual height of your image
//                           quality={100}
//                       />
//                   </div>
//               </section>
//             </main>

//             <div className="bg-[url('/path/to/background-1.png')] bg-cover min-h-screen flex flex-col items-center">
//       {/* Header Section */}
//       <div className="text-center mt-10 space-y-4">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           Apúntate a la lista y aprovéchate de la oferta de lanzamiento
//         </h1>
//         <p className="text-gray-600">5€ de descuento PARA SIEMPRE</p>

//         {/* Email Subscription Form */}
//         <div className="mt-4 flex justify-center items-center">
//           <input
//             type="email"
//             placeholder="email"
//             className="border border-gray-300 rounded-l-md p-2 focus:outline-none"
//           />
//           <button className="bg-[#ff6f61] text-white font-semibold p-2 rounded-r-md hover:bg-[#ff5c5c]">
//             Apúntate
//           </button>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="mt-16 text-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-8">Cómo funciona</h2>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8">

//           {/* Step 1 */}
//           <div className="bg-white p-6 shadow-md rounded-md w-72">
//             <div className="w-16 h-16 mx-auto mb-4">
//               <Image src={IMAGES.vineoil} alt="Icon" width={100} height={50}/>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800">Contesta el cuestionario</h3>
//             <p className="text-gray-600 mt-2">
//               Descubre tus preferencias vinícolas con solo 12 sencillas preguntas
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="bg-white p-6 shadow-md rounded-md w-72">
//             <div className="w-16 h-16 mx-auto mb-4">
//             <Image src={IMAGES.answer} alt="Icon" width={100} height={50}/>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800">Descubre tus gustos</h3>
//             <p className="text-gray-600 mt-2">
//               Nuestro sistema personalizado te brindará recomendaciones de vinos acordes a tus gustos y preferencias únicas
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="bg-white p-6 shadow-md rounded-md w-72">
//             <div className="w-16 h-16 mx-auto mb-4">
//             <Image src={IMAGES.bottle} alt="Icon" width={100} height={50}/>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-800">Disfruta de la experiencia</h3>
//             <p className="text-gray-600 mt-2">
//               Prepárate para recibir vino a domicilio cada mes. Cancela en cualquier momento
//             </p>
//           </div>
//         </div>

//         {/* Call to Action Button */}
//         <button className="mt-8 bg-[#ff6f61] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#ff5c5c]">
//           Contesta el cuestionario
//         </button>
//       </div>
//     </div>

//     <div className="bg-[url('/path/to/background-1.png')] bg-cover min-h-screen px-8 py-12">
//       {/* El Proceso Section */}
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 my-12">
//         <Image src={IMAGES.boxgif} alt="boxgif" width={400} height={400}/>

//         {/* Right Text Content */}
//         <div className="max-w-lg text-center md:text-left">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">El Proceso</h2>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">
//             ¿Cómo encontramos los vinos perfectos para ti?
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Analizamos tus preferencias de vino a través de 18 aspectos clave. Luego, nuestro algoritmo determina la probabilidad de que te guste cada botella que incluiremos en cada caja.
//           </p>
//           <p className="text-gray-600 mb-6">
//             Este valor se utiliza para seleccionar cuidadosamente las botellas de vino que incluiremos en tu caja.
//           </p>
//           <button className="bg-[#ff6f61] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#ff5c5c]">
//             Comienza
//           </button>
//         </div>
//       </div>

//       {/* La esencia de Vineo Section */}
//       <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
//         <div className="flex-shrink-0">
//           <Image
//             src={IMAGES.winebox}
//             alt="Wine Box"
//             width={700} height={700}
//           />
//         </div>
//         <div className="max-w-lg text-center md:text-left">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             La esencia de Vineo
//           </h3>
//           <p className="text-gray-600">
//             Recibe una caja con 3 vinos, 2 cuidadosamente seleccionados según tus preferencias y 1 que te sorprenderá con nuevos sabores y experiencias.
//           </p>
//         </div>
//       </div>
//     </div>

// <div className="bg-[url('/path/to/background-1.png')] bg-cover min-h-screen px-8 py-12">
//   {/* El Algoritmo Section */}
//   <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 my-12">
//     {/* Text Content */}
//     <div className="max-w-lg text-center md:text-left">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">El Algoritmo</h2>
//       <h3 className="text-xl font-semibold text-gray-700 mb-2">
//         Cada vez que valoras un vino, mejora el algoritmo
//       </h3>
//       <p className="text-gray-600 mb-4">
//         Nuestro algoritmo aprende con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.
//       </p>
//       <button className="bg-[#ff6f61] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#ff5c5c]">
//         Comienza
//       </button>
//     </div>

//     {/* Illustration/Graph Section */}
//     <div className="w-80 h-96 bg-white shadow-md rounded-md flex items-center justify-center">
//       <Image src={IMAGES.graph }
//         alt="Algorithm Illustration"
//         width={200} height={600}
//       />
//     </div>
//   </div>

//   {/* Tu Aprendizaje Section */}
//   <div className="flex flex-col md:flex-row items-center gap-8 my-12">
//     {/* Card Image */}
//     <div className="w-80 h-auto bg-white shadow-md rounded-md overflow-hidden">
//       <img
//         src="/path/to/bottleImage.png"
//         alt="Bottle Information"
//         className="w-full h-full object-cover"
//       />
//     </div>

//     {/* Text Content */}
//     <div className="max-w-lg text-center md:text-left">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tu Aprendizaje</h3>
//       <h4 className="text-xl font-semibold text-gray-700 mb-2">
//         Aprende sobre vinos con cada caja
//       </h4>
//       <p className="text-gray-600 mb-4">
//         Nuestro objetivo es ofrecerte una selección variada de vinos, incluyendo una amplia gama de tipos, sabores y regiones.
//       </p>
//       <p className="text-gray-600">
//         Cada caja es una oportunidad para explorar y descubrir nuevas experiencias en el maravilloso mundo del vino. ¡Aprende y disfruta al mismo tiempo!
//       </p>
//     </div>
//   </div>
// </div>

//             {/* FAQ Section */}
//             <section className="py-10 bg-gray-100">
//                 <h2 className="text-3xl font-bold text-center">Preguntas frecuentes</h2>
//                 <div className="mt-6">
//                     <ul className="list-disc list-inside">
//                         <li>¿Cómo me registro?</li>
//                         <li>¿Qué tipos de vinos ofrecen?</li>
//                         <li>¿Hay costos de envío?</li>
//                     </ul>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer className="py-10 text-center">
//                 <p>No te pierdas ni una.</p>
//                 <input type="email" placeholder="Introduce tu email" className="mt-4 p-2 border border-gray-300 rounded" />
//                 <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Suscribirse</button>
//             </footer>
//           </div>
//       );
// };

// export default LandingPage;
