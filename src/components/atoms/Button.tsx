'use client';
import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "contained" | "outlined" | "text"; // Variant of the button
  color?: "orange" | "secondary" | "default"; // Color of the button
  size?: "small" | "medium" | "large"; // Size of the button
  fullWidth?: boolean; // If true, button will take full width
  sx?: object; // Custom styles (using sx prop for Material UI)
  disabled?: boolean; // Disables the button if true
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "contained", // Default is "contained"
  color = "default", // Default is "default"
  size = "medium", // Default is "medium"
  fullWidth = false, // Default is false
  sx = {}, // Default to empty object
  disabled = false, // Default is false
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        padding: "8px 16px",
        borderRadius: "8px", // Border radius for rounded corners
        backgroundColor: "#F78A79", // Updated button color based on your provided color
        color: "#fff", // Text color (white)
        border: "2px solid transparent", // Initial border set to transparent
        '&:hover': {
          backgroundColor: "#F25D54", // Slightly darker shade on hover
          borderColor: "#F25D54", // Border color on hover
        },
        '&:disabled': {
          backgroundColor: "#d3d3d3", // Light grey when disabled
          color: "#a0a0a0", // Grey text when disabled
        },
        ...sx, // Apply custom styles passed via the sx prop
      }}
      disabled={disabled}
    >
      {text}
    </MuiButton>
  );
};
