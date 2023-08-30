import React from 'react';

const TaskModal = ({ isOpen, onRequestClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="  absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 rounded-lg p-6">
      <div className="relative w-auto max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-2">
          <button onClick={onRequestClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900"> Are you sure?</h3>
          <p className="mt-2 text-sm text-gray-500">
            This action cannot be reversed. Once you submit, it cannot be reversed.
          </p>
          <div className=" px-3 py-3 gap-6 sm:flex sm:flex-row-reverse sm:px-6">
                  
                  <button
                    type="button"
                    className="mt-3 mr-2 inline-flex w-full justify-center rounded-md bg-red-500 px-6 py-1.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600  ring-gray-300 hover:bg-red-700 sm:mt-0 sm:w-auto"  
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={onConfirm} // Trigger the onConfirm callback
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-6 py-1.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm ring-gray-300 hover:bg-blue-700 sm:mt-0 sm:w-auto"  
                  >
                    Yes
                  </button>
                
                </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
