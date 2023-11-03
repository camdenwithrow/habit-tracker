import React, { useState } from 'react';
import Habit from './Habit';
import AddHabit from './AddHabit';

interface HabitItem {
    name: string;
    completed: boolean;
}

const HabitList: React.FC = () => {
    const [habits, setHabits] = useState<HabitItem[]>([
        { name: 'Exercise', completed: false },
        { name: 'Read', completed: true },
        { name: 'Meditate', completed: false },
    ]);

    const handleToggle = (index: number) => {
        const updatedHabits = [...habits];
        updatedHabits[index].completed = !updatedHabits[index].completed;
        setHabits(updatedHabits);
    };

    const handleAddHabit = (habitName: string) => {
        const newHabit = { name: habitName, completed: false };
        setHabits([...habits, newHabit]);
    };

    const handleDeleteHabit = (index: number) => {
        const updatedHabits = [...habits];
        updatedHabits.splice(index, 1);
        setHabits(updatedHabits);
      };    

    return (
        <div>
            <AddHabit onAdd={handleAddHabit} />
            {habits.map((habit, index) => (
                <Habit
                    key={index}
                    name={habit.name}
                    completed={habit.completed}
                    onToggle={() => handleToggle(index)}
                    onDelete={() => handleDeleteHabit(index)}
                />
            ))}
        </div>
    );
};

export default HabitList;
