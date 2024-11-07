import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowMenu(false); // Close menu after selection
  };

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default context menu
    setShowMenu(true); // Show custom menu
  };

  const handleClickOutside = () => {
    setShowMenu(false); // Hide the menu when clicking outside
  };

  return (
    <div onContextMenu={handleRightClick} onClick={handleClickOutside} className="relative">
      {/* Render the custom right-click menu at the top right corner */}
      {showMenu && (
        <div
          className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg py-2 z-50"
        >
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full px-4 py-2 text-left text-blue-500 hover:bg-blue-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="block w-full px-4 py-2 text-left text-green-500 hover:bg-green-100"
          >
            Español
          </button>
        </div>
      )}
      <p className="text-gray-500">Right-click here to select a language.</p>
    </div>
  );
};

export default LanguageSwitcher;
