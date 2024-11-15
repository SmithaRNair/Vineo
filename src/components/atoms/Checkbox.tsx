// src/components/atoms/Checkbox.tsx
import { Field } from 'formik';

interface CheckboxProps {
  name: string;
  label: string;
}

const Checkbox = ({ name, label }: CheckboxProps) => (
  <div className="mb-4 flex items-center justify-start">
    <Field id={name} type="checkbox" name={name} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
    <label htmlFor={name} className="font-inter text-gray-700">{label}</label>
  </div>
);

export default Checkbox;
