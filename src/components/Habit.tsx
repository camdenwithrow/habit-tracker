// src/components/Habit.tsx
import React from 'react';

interface HabitProps {
  name: string;
  completed: boolean;
  onToggle: () => void;
}

const Habit: React.FC<HabitProps> = ({ name, completed, onToggle }) => {
  return (
    <div
      className={`cursor-pointer mb-2 ${
        completed ? 'bg-teal-800' : 'hover:bg-gray-200'
      } p-2 rounded-lg`}
      onClick={onToggle}
    >
      <span className={completed ? 'line-through text-gray-100' : ''}>{name}</span>
    </div>
  );
};

export default Habit;
