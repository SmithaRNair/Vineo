'use client'; // Marking as client-side component

import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import the WhatsApp icon
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '../atoms/Button'; // Importing the Button from the atoms folder

export const Header = () => {
  const router = useRouter(); // Initialize useRouter hook

  const handleBeginClick = () => {
    router.push('/question'); // Navigate to the sign-in page
  };

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-custom-gradient p-4 text-white">
      {/* Vineo Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Vineo Logo" className="w-32" />
      </div>

      {/* Buttons */}
      <div className="ml-auto flex space-x-4 bg-transparent">
        {/* First Button: "Give Vineo as a Gift" */}
        <Button
          text="Give Vineo as a Gift"
          onClick={() => console.log('Gift clicked')}
          variant="outlined" // Use 'outlined' for transparent background
          color="default" // Default for outlined
          
          sx={{
            'textTransform': 'none',
            'padding': '10px 30px',
            'width':'200px',
            'color': '#F78A79', // Orange text color
            'backgroundColor': 'transparent', // Transparent background
            '&:hover': {
              backgroundColor: 'transparent', // Keep transparent on hover
              borderColor: '#F25D54', // Slightly darker border on hover
            },
          }}
        />

        {/* Second Button: "Begin" */}
        <Button
          text="Begin"
          onClick={handleBeginClick} // Navigate to sign-in page
          variant="contained"
          color="orange"
          sx={{
            Padding: '10px ',
          }}

        />

        {/* Third Button: "Access" */}
        <Button
          text="Access"
          onClick={() => console.log('Access clicked')}
          variant="outlined"
          color="secondary"
          sx={{
            backgroundColor: 'transparent',
            borderColor: '#F78A79',
          }}
        />
      </div>

      {/* WhatsApp Icon Button */}
      <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
        <IconButton
          className="bg-green-500 hover:bg-green-600"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon style={{ color: 'white' }} />
        </IconButton>
      </a>
    </nav>
  );
};

// import React from "react";
// import { Button } from "../atoms/Button"; // Import the custom Button component
// import IconButton from "@mui/material/IconButton";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import the WhatsApp icon
// import { useRouter } from 'next/navigation'; // Importing useRouter for navigation

// export const Header = () => {
//   const router = useRouter(); // Initialize useRouter hook

//   const handleBeginClick = () => {
//     router.push("/sign-in"); // Navigate to the sign-in page
//   };

//   return (
//     <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-slate-700  text-white w-full">
//       {/* Vineo Logo */}
//       <div className="flex items-center">
//         <img src="/images/logo.png" alt="Vineo Logo" className="w-32" />
//       </div>

//       {/* Buttons */}
//       <div className="flex space-x-4 ml-auto">
//         {/* First Button: "Give Vineo as a Gift" */}
//         <Button
//           text="Give Vineo as a Gift"
//           onClick={() => console.log("Gift clicked")}
//           textColor="default" // Default text color (white)
//         />

//         {/* Second Button: "Begin" */}
//         <Button
//           text="Begin"
//           onClick={handleBeginClick} // Navigate to sign-in page
//           bgColor="orange-500" // Background color as orange
//           textcolor="white" // Text color white
//         />

//         {/* Third Button: "Access" */}
//         <Button
//           text="Access"
//           onClick={() => console.log("Access clicked")}
//           borderColor="orange-500" // Orange border
//           textcolor="orange-500" // Orange text color
//         />
//       </div>

//       {/* WhatsApp Icon Button */}
//       <a href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
//         <IconButton
//           className="bg-green-500 hover:bg-green-600"
//           aria-label="WhatsApp"
//         >
//           <WhatsAppIcon style={{ color: "white" }} />
//         </IconButton>
//       </a>
//     </header>
//   );
// };
