// components/ClientDetailsModal.tsx
import React from 'react';

interface ClientDetails {
  name: string;
  address: string;
  email: string;
  country: string;
  password: string;
  postalCode: string;
  phone: string;
  city: string;
}

interface ClientDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientData: ClientDetails;
}

const ClientDetailsModal: React.FC<ClientDetailsModalProps> = ({ isOpen, onClose, clientData }) => {
  if (!isOpen) return null;

  return (
    // Overlay with a lighter background
    <div className="fixed inset-0 bg-gray-200 bg-opacity-0 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Detalles del cliente</h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Nombre completo</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.name}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Dirección completa</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.address}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.email}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">País</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.country}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Crear contraseña</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.password}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Código postal</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.postalCode}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Teléfono</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.phone}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Ciudad</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
              value={clientData.city}
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientDetailsModal;
