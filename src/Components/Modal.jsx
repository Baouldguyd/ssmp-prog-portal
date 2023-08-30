import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="relative w-auto max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-2">
          <button onClick={onRequestClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900"> Password reset successful!</h3>
          <p className="mt-2 text-sm text-gray-500">
          You are now a verified student, proceed to login into your account
          </p>
          <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Link to='/signin'>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"  
                  >
                    Ok
                  </button>
                  </Link>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
