// src/App.tsx
import React, { useState } from 'react';
import HabitList from './components/HabitList';

const App: React.FC = () => {
  const [habits, setHabits] = useState([
    { name: 'Exercise', completed: false },
    { name: 'Read', completed: true },
    { name: 'Meditate', completed: false },
  ]);

  const handleToggle = (index: number) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  return (
    <div className="p-4 inline-block">
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <HabitList habits={habits} onToggle={handleToggle} />
    </div>
  );
};

export default App;
