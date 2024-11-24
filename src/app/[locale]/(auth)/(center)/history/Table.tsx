import React from 'react';
import { Box } from './types'; // Assuming Box type is available in types folder

type TableProps = {
  boxes: Box[];
  handleOpenModal: (user: any) => void;
  handleDownload: (boxId: string) => void;
  handleWhatsApp: (phone: string, message: string) => void;
};

const Table: React.FC<TableProps> = ({ boxes, handleOpenModal, handleDownload, handleWhatsApp }) => (
  <div className="overflow-x-auto rounded-lg bg-white shadow-md">
    <table className="min-w-full text-xs text-gray-500 sm:text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left sm:px-4">User Details</th>
          <th className="p-2 text-left sm:px-4">Wine in Box</th>
          <th className="p-2 text-left sm:px-4">Box Creation Date</th>
          <th className="p-2 text-left sm:px-4">Box Delivery Date</th>
          <th className="p-2 text-left sm:px-4">Box Type</th>
          <th className="p-2 text-left sm:px-4">Status</th>
          <th className="p-2 text-left sm:px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {boxes.length > 0 ? (
          boxes.map((box) => (
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
              {/* Other columns for box details */}
              <td className="flex items-center justify-center space-x-2 p-2">
                <Button onClick={() => handleDownload(box._id)}>Download</Button>
                <Button onClick={() => handleOpenModal(box.user)}>Details</Button>
                <Button onClick={() => handleWhatsApp(box.user.phone, `Hello ${box.user.name}, here is a message.`)}>
                  WhatsApp
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="p-4 text-center">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
