// components/molecules/Form.tsx
import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Form: React.FC = () => (
  <div className="flex flex-col items-center space-y-4">
    <Input placeholder="email" type="email" />
    <Button text="Apúntate" />
  </div>
);

export default Form;
