// src/app/history/layout.tsx
import React from 'react';
import Sidebar from '@/components/Sidebar';

const HistoryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default HistoryLayout;
