// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  progress: number; // The progress percentage (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full mb-8">
      <progress
        className="w-full h-2"
        value={progress}
        max={100}
        style={{ appearance: 'none', backgroundColor: '#f0f0f0' }}
      />
      <div
        className="h-2 bg-vineopink"
        style={{
          width: `${progress}%`,
          borderRadius: '0.2rem',
          height: '4px',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
