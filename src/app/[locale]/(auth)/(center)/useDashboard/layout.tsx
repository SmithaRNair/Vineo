import React from 'react';
import Sidebar from '@/components/Sidebar';

const UseDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-16 p-6 overflow-y-auto">
        {/* Ensure the children (which could be your BoxItem component) takes full width minus the sidebar */}
        <div className="flex w-full">
          {/* Main Content (wine boxes and chart) */}
          <div className="flex flex-col lg:flex-row items-start w-full lg:w-[calc(100%-250px)]"> {/* Adjust the width dynamically based on the sidebar */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UseDashboardLayout;
