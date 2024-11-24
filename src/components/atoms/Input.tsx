// components/atoms/Input.tsx
import React from 'react';

type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder = 'Enter email', value, onChange }) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;
// // components/atoms/Input.tsx
// import React from 'react';

// interface InputProps {
//   placeholder: string;
//   type: string;
// }

// const Input: React.FC<InputProps> = ({ placeholder, type }) => (
//   <input
//     type={type}
//     placeholder={placeholder}
//     className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500"
//   />
// );

// export default Input;
