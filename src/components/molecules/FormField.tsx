// src/components/molecules/FormField.tsx
import InputField from '../atoms/InputField';
import {PasswordInput} from '../PasswordInput';

interface FormFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  password?: boolean;
}

const FormField = ({ name, type, label, placeholder, password }: FormFieldProps) => (
  <div className="relative mb-4">
    <label htmlFor={name} className="block font-inter font-medium text-vineogray">{label}</label>
    {password ? (
      <PasswordInput
        name={name}
        placeholder={placeholder}
        className="w-full sm:w-[90%] md:w-[350px] h-12 rounded-lg border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
    ) : (
      <InputField 
        name={name} 
        type={type} 
        placeholder={placeholder} // removed label from here since it's already handled by the <label> above.
      />
    )}
  </div>
);


export default FormField;
