import React from 'react';

const CustomButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button className="rounded-xl bg-vineopink px-6 py-3 text-white hover:bg-rose-300" onClick={onClick}>
    {label}
  </button>
);

export default CustomButton;
