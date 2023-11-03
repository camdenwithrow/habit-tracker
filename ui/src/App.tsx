import React, { useState } from 'react';
import HabitList from './components/HabitList';

const App: React.FC = () => {
  return (
    <div className="p-4 inline-block">
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <HabitList />
    </div>
  );
};

export default App;
