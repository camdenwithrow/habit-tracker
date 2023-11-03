import React from 'react';

interface HabitProps {
    name: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

const Habit: React.FC<HabitProps> = ({ name, completed, onToggle, onDelete }) => {
    return (
        <div className="cursor-pointer mb-2 flex w-full justify-between items-center">
            <div
                className={`${completed ? 'bg-green-100' : 'hover:bg-gray-100'
                    } w-full p-2 rounded-lg`}
                onClick={onToggle}
            >
                <span className={completed ? 'line-through' : ''}>{name}</span>
            </div>
            <button
                className="ml-2 p-2 bg-red-500 text-white rounded-md"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default Habit;
