// 'use client';

// import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardQuery } from '@app/redux/apiSlice';
// import { Cancel, CheckCircle, Download, Edit, LocalShipping, Visibility, WhatsApp } from '@mui/icons-material';
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// import ClientDetailsModal from '@/components/ClientDetailsModal';
// import LanguageSwitcher from '@/components/LanguageSwitcher';

// type User = {
//   _id: string;
//   name: string;
//   phone: string;
//   email: string;
//   house?: string;
//   city?: string;
//   country?: string;
//   zipcode?: string;
// };

// type Wine = {
//   _id: string;
//   name: string;
//   box_count: number;
// };

// type Box = {
//   _id: string;
//   user: User;
//   created_at: string;
//   delivery_date: string;
//   status: number;
//   box_type: number;
//   box_wines: Wine[];
// };

// const HistoryPage: React.FC = () => {
//   const { t } = useTranslation(); // Initialize translations

//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for selected user data
//   const [downloadBoxId, setDownloadBoxId] = useState<string | null>(null); // State for download box ID

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchQuery(searchQuery);
//     }, 500); // Adjust the debounce delay here (500ms in this case)

//     return () => {
//       clearTimeout(handler); // Clear timeout if input changes
//     };
//   }, [searchQuery]);

//   const { data, error, isLoading } = useGetBoxHistoryAdminQuery({
//     searchString: debouncedSearchQuery,
//     page,
//     pageSize,
//   });

//   // Query for download data, only triggered when `downloadBoxId` changes
//   const { data: downloadData, error: downloadError } = useGetBoxWinePrintCardQuery(downloadBoxId, {
//     skip: !downloadBoxId, // Only execute when downloadBoxId is set
//   });

//   // Effect to handle downloading the file when `downloadData` is received
//   useEffect(() => {
//     if (downloadData) {
//       const fileContent = JSON.stringify(downloadData, null, 2);
//       const blob = new Blob([fileContent], { type: 'application/json' });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = url;
//       link.download = `box_${downloadBoxId}.json`; // File name format
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       setDownloadBoxId(null); // Reset after download
//     }
//   }, [downloadData, downloadBoxId]);

//   const handleOpenModal = (user: User) => {
//     setSelectedUser(user); // Set the selected user data
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setSelectedUser(null); // Clear selected user data
//   };

//   // WhatsApp Functionality
//   const handleWhatsApp = (phone: string, message: string) => {
//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   const handleDownload = (boxId: string) => {
//     setDownloadBoxId(boxId); // Trigger the download by setting the box ID
//   };

//   const boxes = data?.data?.getBoxHistoryAdmin?.boxes || [];

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   if (isLoading) {
//     return <div>{t('Loading...')}</div>;
//   }

//   if (error) {
//     return <div>{t('Error fetching data.')}</div>;
//   }

//   return (
//     <div className="p-4 sm:p-6">
//       <LanguageSwitcher />
//       <h2 className="text-lg font-semibold">{t('Wine Box History')}</h2>
//       <div className="my-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full rounded border p-2 sm:w-52"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="overflow-x-auto rounded-lg bg-white shadow-md">
//         <table className="min-w-full text-xs text-gray-500 sm:text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 text-left sm:px-4">{t('User Details')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Wine in Box')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Box Creation Date')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Box Delivery Date')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Box Type')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Status')}</th>
//               <th className="p-2 text-left sm:px-4">{t('Actions')}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {boxes.length > 0 ? (
//               boxes.map(box => (
//                 <tr key={box._id} className="border-t hover:bg-gray-50">
//                   <td className="flex items-center p-2 sm:px-4">
//                     <div className="mr-2 flex items-center justify-center rounded-full bg-blue-300 font-semibold text-white">
//                       {box.user?.name?.charAt(0) || 'N/A'}
//                     </div>
//                     <div>
//                       <div>{box.user?.name || 'No Name'}</div>
//                       <div className="text-xs text-gray-500">{box.user?.phone || t('No Phone')}</div>
//                     </div>
//                   </td>
//                   <td className="p-2 sm:px-4">
//                     {box.box_wines?.length > 0
//                       ? box.box_wines.map((wine, index) => (
//                         <div key={index} className="mb-2">
//                           {wine.name || t('Unnamed Wine')}
//                         </div>
//                       ))
//                       : 'No Products'}
//                   </td>
//                   <td className="p-2 sm:px-4">
//                     {box.created_at ? new Date(box.created_at).toLocaleDateString() : 'N/A'}
//                   </td>
//                   <td className="p-2 sm:px-4">
//                     {box.delivery_date ? new Date(box.delivery_date).toLocaleDateString() : 'N/A'}
//                   </td>
//                   <td className="p-2 text-green-500 sm:px-4">{t('Deliverable')}</td>
//                   <td className="p-2 text-red-500 sm:px-4">{t('Rejected')}</td>
//                   <td className="flex items-center justify-center space-x-2 p-2">
//                     {/* Download Button */}
//                     <div
//                       className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-purple-400"
//                       onClick={() => handleDownload(box._id)}
//                     >
//                       <Download fontSize="small" className="text-white" />
//                     </div>
//                     <div
//                       className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-orange-400"
//                       onClick={() => handleOpenModal(box.user)}
//                     >
//                       <Visibility fontSize="small" className="text-white" />
//                     </div>
//                     <div
//                       className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-green-400"
//                       onClick={() => handleWhatsApp(box.user.phone, `Hello ${box.user.name}, here is a message.`)}
//                     >
//                       <WhatsApp fontSize="small" className="text-white" />
//                     </div>
//                     <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                       <CheckCircle fontSize="small" className="text-white" />
//                     </div>
//                     <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                       <Cancel fontSize="small" className="text-white" />
//                     </div>
//                     <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                       <Edit fontSize="small" className="text-white" />
//                     </div>
//                     <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                       <LocalShipping fontSize="small" className="text-white" />
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={8} className="p-4 text-center">{t('No data available')}</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
//           <span className="text-gray-600">
//             {data?.data?.getBoxHistoryAdmin?.total || 0}
//             {' '}
//             Clients
//           </span>
//           <div className="mt-2 flex items-center space-x-1 sm:mt-0">
//             <button
//               onClick={() => handlePageChange(page - 1)}
//               disabled={page === 1}
//               className="rounded bg-gray-200 px-2 py-1"
//             >
//               {'<'}
//             </button>
//             <span>{page}</span>
//             <button
//               onClick={() => handlePageChange(page + 1)}
//               disabled={boxes.length < pageSize}
//               className="rounded bg-gray-200 px-2 py-1"
//             >
//               {'>'}
//             </button>
//           </div>
//           <select
//             value={pageSize}
//             onChange={e => setPageSize(Number(e.target.value))}
//             className="mt-2 rounded border border-gray-300 p-1 sm:mt-0"
//           >
//             <option value={10}>10 / page</option>
//             <option value={20}>20 / page</option>
//           </select>
//         </div>
//       </div>

//       {selectedUser && (
//         <ClientDetailsModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           clientData={{
//             name: selectedUser.name,
//             address: selectedUser.house || 'N/A',
//             email: selectedUser.email,
//             country: selectedUser.country || 'N/A',
//             postalCode: selectedUser.zipcode || 'N/A',
//             phone: selectedUser.phone,
//             city: selectedUser.city || 'N/A',
//             password: '******',
//           }}
//         />
//       )}
//     </div>


//   );
// };

// export default HistoryPage;

'use client';

import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardQuery } from '@app/redux/apiSlice';
import { Cancel, CheckCircle, Download, Edit, LocalShipping, Visibility, WhatsApp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

import ClientDetailsModal from '@/components/ClientDetailsModal';
//import LanguageSwitcher from '@/components/LanguageSwitcher';

type User = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  house?: string;
  city?: string;
  country?: string;
  zipcode?: string;
};

type Wine = {
  _id: string;
  name: string;
  box_count: number;
};

type Box = {
  _id: string;
  user: User;
  created_at: string;
  delivery_date: string;
  status: number;
  box_type: number;
  box_wines: Wine[];
};

const DashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [downloadBoxId, setDownloadBoxId] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const { data, error, isLoading } = useGetBoxHistoryAdminQuery({
    searchString: debouncedSearchQuery,
    page,
    pageSize,
  });

  const { data: downloadData } = useGetBoxWinePrintCardQuery(downloadBoxId, {
    skip: !downloadBoxId,
  });

  useEffect(() => {
    if (downloadData) {
      const fileContent = JSON.stringify(downloadData, null, 2);
      const blob = new Blob([fileContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `box_${downloadBoxId}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadBoxId(null);
    }
  }, [downloadData, downloadBoxId]);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleWhatsApp = (phone: string, message: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDownload = (boxId: string) => {
    setDownloadBoxId(boxId);
  };

  const boxes = data?.data?.getBoxHistoryAdmin?.boxes || [];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="p-4 sm:p-6">
      
      <h2 className="text-lg font-semibold">Historia de la caja de vino</h2>
      <div className="my-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full rounded border p-2 sm:w-52"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <table className="min-w-full text-xs text-gray-500 sm:text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left sm:px-4">Detalles del usuario</th>
              <th className="p-2 text-left sm:px-4">Vino en caja</th>
              <th className="p-2 text-left sm:px-4">Fecha de creación del cuadro</th>
              <th className="p-2 text-left sm:px-4">Fecha de entrega de la caja</th>
              <th className="p-2 text-left sm:px-4">Tipo de caja</th>
              <th className="p-2 text-left sm:px-4">Status</th>
              <th className="p-2 text-left sm:px-4">Comportamiento</th>
            </tr>
          </thead>
          <tbody>
            {boxes.length > 0 ? (
              boxes.map(box => (
                <tr key={box._id} className="border-t hover:bg-gray-50">
                  <td className="flex items-center p-2 sm:px-4">
                    <div className="mr-2 flex items-center justify-center rounded-full bg-blue-300 font-semibold text-white">
                      {box.user?.name?.charAt(0) || 'N/A'}
                    </div>
                    <div>
                      <div>{box.user?.name || 'No Name'}</div>
                      <div className="text-xs text-gray-500">{box.user?.phone || 'No Phone'}</div>
                    </div>
                  </td>
                  <td className="p-2 sm:px-4">
                    {box.box_wines?.length > 0
                      ? box.box_wines.map((wine, index) => (
                        <div key={index} className="mb-2">
                          {wine.name || 'Unnamed Wine'}
                        </div>
                      ))
                      : 'No Products'}
                  </td>
                  <td className="p-2 sm:px-4">
                    {box.created_at ? new Date(box.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="p-2 sm:px-4">
                    {box.delivery_date ? new Date(box.delivery_date).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="p-2 text-green-500 sm:px-4">Entregable</td>
                  <td className="p-2 text-red-500 sm:px-4">Rechazada</td>
                  <td className="flex items-center justify-center space-x-2 p-2">
                    <div
                      className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-purple-400"
                      onClick={() => handleDownload(box._id)}
                    >
                      <Download fontSize="small" className="text-white" />
                    </div>
                    <div
                      className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-orange-400"
                      onClick={() => handleOpenModal(box.user)}
                    >
                      <Visibility fontSize="small" className="text-white" />
                    </div>
                    <div
                      className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-green-400"
                      onClick={() => handleWhatsApp(box.user.phone, `Hello ${box.user.name}, here is a message.`)}
                    >
                      <WhatsApp fontSize="small" className="text-white" />
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
                      <CheckCircle fontSize="small" className="text-white" />
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
                      <Cancel fontSize="small" className="text-white" />
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
                      <Edit fontSize="small" className="text-white" />
                    </div>
                    <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
                      <LocalShipping fontSize="small" className="text-white" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-4 text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
          <span className="text-gray-600">
            {data?.data?.getBoxHistoryAdmin?.total || 0} Clientes
          </span>
          <div className="mt-2 flex items-center space-x-1 sm:mt-0">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="rounded bg-gray-200 px-2 py-1"
            >
              {'<'}
            </button>
            <span>{page}</span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={boxes.length < pageSize}
              className="rounded bg-gray-200 px-2 py-1"
            >
              {'>'}
            </button>
          </div>
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="mt-2 rounded border border-gray-300 p-1 sm:mt-0"
          >
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
          </select>
        </div>
      </div>

      {selectedUser && (
        <ClientDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          clientData={{
            name: selectedUser.name,
            address: selectedUser.house || 'N/A',
            email: selectedUser.email,
            country: selectedUser.country || 'N/A',
            postalCode: selectedUser.zipcode || 'N/A',
            phone: selectedUser.phone,
            city: selectedUser.city || 'N/A',
            password: '******',
          }}
        />
      )}
    </div>
  );
};

export default DashboardPage;

// 'use client';
// import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardQuery } from '@app/redux/apiSlice';
// import { Cancel, CheckCircle, Download, Edit, LocalShipping, Visibility, WhatsApp } from '@mui/icons-material';
// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import ClientDetailsModal from '@/components/ClientDetailsModal';

// type User = {
//   _id: string;
//   name: string;
//   phone: string;
//   email: string;
//   house?: string;
//   city?: string;
//   country?: string;
//   zipcode?: string;
// };

// type Wine = {
//   _id: string;
//   name: string;
//   box_count: number;
// };

// type Box = {
//   _id: string;
//   user: User;
//   created_at: string;
//   delivery_date: string;
//   status: number;
//   box_type: number;
//   box_wines: Wine[];
// };

// const DashboardPage: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for selected user data
//   const [downloadBoxId, setDownloadBoxId] = useState<string | null>(null); // State for download box ID

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearchQuery(searchQuery);
//     }, 500); // Adjust the debounce delay here (500ms in this case)

//     return () => {
//       clearTimeout(handler); // Clear timeout if input changes
//     };
//   }, [searchQuery]);

//   const { data, error, isLoading } = useGetBoxHistoryAdminQuery({
//     searchString: debouncedSearchQuery,
//     page,
//     pageSize,
//   });

//   // Query for download data, only triggered when `downloadBoxId` changes
//   const { data: downloadData, error: downloadError } = useGetBoxWinePrintCardQuery(downloadBoxId, {
//     skip: !downloadBoxId, // Only execute when downloadBoxId is set
//   });

//   // Effect to handle downloading the file when `downloadData` is received
//   useEffect(() => {
//   if (downloadData) {
//     try {
//       const pdf = new jsPDF();

//       pdf.setFontSize(12);
//       pdf.text('Box Details', 10, 10);
//       pdf.text(`Box ID: ${downloadBoxId}`, 10, 20);

//       const content = JSON.stringify(downloadData, null, 2);
//       const lines = pdf.splitTextToSize(content, 180);
//       pdf.text(lines, 10, 30);

//       pdf.save(`box_${downloadBoxId}.pdf`);

//       setDownloadBoxId(null); // Reset after download
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     }
//   }
// }, [downloadData, downloadBoxId]);

//   const handleOpenModal = (user: User) => {
//     setSelectedUser(user); // Set the selected user data
//     setIsModalOpen(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setSelectedUser(null); // Clear selected user data
//   };

//   // WhatsApp Functionality
//   const handleWhatsApp = (phone: string, message: string) => {
//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   const handleDownload = (boxId: string) => {
//     setDownloadBoxId(boxId); // Trigger the download by setting the box ID
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error fetching data.</div>;
//   }

//   const boxes = data?.data?.getBoxHistoryAdmin?.boxes || [];
//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-lg font-semibold">Historia de la caja de vino</h2>

//       <div className="my-4">
//         <input
//           type="text"
//           placeholder="Buscar..."
//           className="w-full rounded border p-2 sm:w-52"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="overflow-x-auto rounded-lg bg-white shadow-md">
//         <table className="min-w-full text-xs text-gray-500 sm:text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 text-left sm:px-4">Detalles del usuario</th>
//               <th className="p-2 text-left sm:px-4">Vino en caja</th>
//               <th className="p-2 text-left sm:px-4">Fecha de creación del cuadro</th>
//               <th className="p-2 text-left sm:px-4">Fecha de entrega de la caja</th>
//               <th className="p-2 text-left sm:px-4">Tipo de caja</th>
//               <th className="p-2 text-left sm:px-4">Status</th>
//               <th className="p-2 text-left sm:px-4">Comportamiento</th>
//             </tr>
//           </thead>
//           <tbody>
//             {boxes.length > 0
//               ? (
//                   boxes.map(box => (
//                     <tr key={box._id} className="border-t hover:bg-gray-50">
//                       <td className="flex items-center p-2 sm:px-4">
//                         <div className="mr-2 flex items-center justify-center rounded-full bg-blue-300 font-semibold text-white">
//                           {box.user?.name?.charAt(0) || 'N/A'}
//                         </div>
//                         <div>
//                           <div>{box.user?.name || 'No Name'}</div>
//                           <div className="text-xs text-gray-500">{box.user?.phone || 'No Phone'}</div>
//                         </div>
//                       </td>
//                       <td className="p-2 sm:px-4">
//                         {box.box_wines?.length > 0
//                           ? box.box_wines.map((wine, index) => (
//                             <div key={index} className="mb-2">
//                               {wine.name || 'Unnamed Wine'}
//                             </div>
//                           ))
//                           : 'No Products'}
//                       </td>
//                       <td className="p-2 sm:px-4">
//                         {box.created_at ? new Date(box.created_at).toLocaleDateString() : 'N/A'}
//                       </td>
//                       <td className="p-2 sm:px-4">
//                         {box.delivery_date ? new Date(box.delivery_date).toLocaleDateString() : 'N/A'}
//                       </td>
//                       <td className="p-2 text-green-500 sm:px-4">Entregable</td>
//                       <td className="p-2 text-red-500 sm:px-4">Rechazada</td>
//                       <td className="mt-1 flex items-center justify-center space-x-2 self-center p-2">
//                         {/* Download Button */}
//                         <div
//                           className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-purple-400"
//                           onClick={() => handleDownload(box._id)} // Trigger download
//                         >
//                           <Download fontSize="small" />
//                         </div>

//                         {/* Visibility Button to Open Modal */}
//                         <div
//                           className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-orange-400"
//                           onClick={() => handleOpenModal(box.user)} // Pass user data to modal
//                         >
//                           <Visibility fontSize="small" />
//                         </div>
//                         <div
//                           className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-green-400"
//                           onClick={() => handleWhatsApp(box.user.phone, `Hello ${box.user.name}, here is a message.`)} // WhatsApp action
//                         >
//                           <WhatsApp fontSize="small" />
//                         </div>
//                         <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                           <CheckCircle fontSize="small" />
//                         </div>
//                         <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                           <Cancel fontSize="small" />
//                         </div>
//                         <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                           <Edit fontSize="small" />
//                         </div>
//                         <div className="flex size-8 items-center justify-center rounded-full bg-gray-200">
//                           <LocalShipping fontSize="small" />
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )
//               : (

//                   <tr>
//                     <td colSpan={8} className="p-4 text-center">No data available</td>
//                   </tr>
//                 )}
//           </tbody>
//         </table>

//         <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
//           <span className="text-gray-600">
//             {data?.data?.getBoxHistoryAdmin?.total || 0}
//             {' '}
//             Clientes
//           </span>
//           <div className="mt-2 flex items-center space-x-1 sm:mt-0">
//             <button
//               onClick={() => handlePageChange(page - 1)}
//               disabled={page === 1}
//               className="rounded bg-gray-200 px-2 py-1"
//             >
//               {'<'}
//             </button>
//             <span>{page}</span>
//             <button
//               onClick={() => handlePageChange(page + 1)}
//               disabled={boxes.length < pageSize}
//               className="rounded bg-gray-200 px-2 py-1"
//             >
//               {'>'}
//             </button>
//           </div>
//           <select
//             value={pageSize}
//             onChange={e => setPageSize(Number(e.target.value))}
//             className="mt-2 rounded border border-gray-300 p-1 sm:mt-0"
//           >
//             <option value={10}>10 / page</option>
//             <option value={20}>20 / page</option>
//           </select>
//         </div>
//       </div>

//       {/* Modal Component */}
//       {selectedUser && (
//         <ClientDetailsModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           clientData={{
//             name: selectedUser.name,
//             address: selectedUser.house || 'N/A',
//             email: selectedUser.email,
//             country: selectedUser.country || 'N/A',
//             postalCode: selectedUser.zipcode || 'N/A',
//             phone: selectedUser.phone,
//             city: selectedUser.city || 'N/A',
//             password: '******', // You might want to handle this more securely
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default DashboardPage;
