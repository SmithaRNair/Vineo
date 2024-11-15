// src/components/atoms/InputField.tsx
import { Field, ErrorMessage } from 'formik';

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const InputField = ({ name, type, label, placeholder }: InputFieldProps) => (
  <div className="mb-4">
    <label htmlFor={name} className="block font-inter text-gray-700">{label}</label>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full sm:w-[90%] md:w-[350px] h-12 rounded-lg border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring focus:ring-blue-300"
    />
    <ErrorMessage name={name} component="div" className="text-red-500" />
  </div>
);

export default InputField;
