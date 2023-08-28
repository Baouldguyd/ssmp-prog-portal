import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const LogoutConfirmation = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/', { replace: true });
  };

  return (
    <div className='flex h-[100vh] w-screen'>
      <Sidebar/>

      <div className="relative inset-0 flex items-center justify-center rounded-lg p-6">
        <div className="relative w-auto max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900"> Log you out?</h3>
            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to log out?
            </p>
            <div className="px-3 py-3 gap-8 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleLogout}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-6 py-1.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm ring-gray-300 hover:bg-blue-700 sm:mt-0 sm:w-auto"
              >
                Yes
              </button>
              <button
                onClick={() => navigate('/dashboard', { replace: true })}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-1.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 ring-gray-300 hover:bg-red-700 sm:mt-0 sm:w-auto"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogOut = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleLogout = () => {
    // Perform any logout-related actions here
    // For example, clearing user session, tokens, etc.
    setShowConfirmation(false);
  };

  return showConfirmation ? (
    <LogoutConfirmation onLogout={handleLogout} />
  ) : null;
};

export default LogOut;
