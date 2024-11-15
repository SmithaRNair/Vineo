// src/components/PasswordInput.tsx
import { Field } from 'formik';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordInputProps {
  name: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className="relative">
      <Field
        type={showPassword ? 'text' : 'password'}
        name={name}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        required
        aria-label="Password"
      />
      <span
        onClick={togglePasswordVisibility}
        onKeyDown={(e) => {
          // Toggling visibility on "Enter" or "Space" key press
          if (['Enter', ' '].includes(e.key)) {
            togglePasswordVisibility();
          }
        }}
        role="button"
        tabIndex={0} // Make the element focusable
        className="absolute inset-y-0 right-0 flex cursor-pointer  text-gray-300 items-center pr-3 "
        aria-label="Toggle password visibility"
      >
        {showPassword ? (
          <VisibilityOff fontSize="small" />
        ) : (
          <Visibility fontSize="small" />
        )}
      </span>
    </div>
  );
};

