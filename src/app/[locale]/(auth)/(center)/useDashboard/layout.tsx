import React from 'react';
import Sidebar from '@/components/Sidebar';

const UseDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 ml-56 p-6 overflow-y-auto">
        {/* Ensure the children (e.g., BoxItem component) take full width minus the sidebar */}
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default UseDashboardLayout;


// import React from 'react';
// import Sidebar from '@/components/Sidebar';

// const UseDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className="flex h-screen">

//       {/* Sidebar - Fixed position */}
//       <Sidebar />
//       {/* Main Content */}
//       <main className="flex-1 ml-55 p-6 overflow-y-auto max-w-full">
//         {/* Ensure the children (which could be your BoxItem component) takes full width minus the sidebar */}
//         <div className="flex-1 w-full">
//           {/* Main Content (wine boxes and chart) */}
//           <div className="flex flex-col lg:flex-row items-start w-full">
//             {children}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UseDashboardLayout; 

