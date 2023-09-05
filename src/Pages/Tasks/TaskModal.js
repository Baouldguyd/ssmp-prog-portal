import React, { useState } from 'react';

const TaskModal = ({ isOpen, onRequestClose, onSaveEdit, initialValue, selectedTask }) => {
  const [editedValue, setEditedValue] = useState(initialValue);

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    onSaveEdit(editedValue); // Pass the edited value back to the parent component
    onRequestClose(); // Close the modal
  };

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 rounded-lg p-6">
      {/* ... (modal content) */}
      <textarea
        value={editedValue}
        onChange={(e) => setEditedValue(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-6 py-1.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm ring-gray-300 hover:bg-blue-700 sm:mt-0 sm:w-auto"
      >
        Save
      </button>
    </div>
  );
};

export default TaskModal;
