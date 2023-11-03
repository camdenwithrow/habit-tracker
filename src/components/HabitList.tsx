// src/components/HabitList.tsx
import React from 'react';
import Habit from './Habit';

interface HabitItem {
  name: string;
  completed: boolean;
}

interface HabitListProps {
  habits: HabitItem[];
  onToggle: (index: number) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, onToggle }) => {
  return (
    <div>
      {habits.map((habit, index) => (
        <Habit
          key={index}
          name={habit.name}
          completed={habit.completed}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
};

export default HabitList;
