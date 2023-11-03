import React, { useState } from 'react';

interface AddHabitProps {
  onAdd: (habitName: string) => void;
}

const AddHabit: React.FC<AddHabitProps> = ({ onAdd }) => {
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit) {
      onAdd(newHabit);
      setNewHabit('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Add a new habit"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button onClick={handleAddHabit} className="ml-2 bg-blue-500 text-white p-2 rounded-md">
        Add
      </button>
    </div>
  );
};

export default AddHabit;
