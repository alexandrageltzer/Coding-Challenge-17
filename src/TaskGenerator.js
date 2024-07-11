
import React, { useState } from 'react';
import tasks from './tasks'; // Import tasks array
import FancyText from './FancyText'; // Import FancyText component
import './TaskGenerator.css'; // Import CSS for styling

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const markTaskCompleted = (taskId) => {
    // Implement functionality to mark task as completed
    // Update tasks array or state to reflect completion
  };

  const { id, name, isCompleted } = tasks[currentTaskIndex];

  return (
    <div className="task-generator">
      <h2>Current Task</h2>
      <p>{name}</p>
      <p>{isCompleted ? 'Completed ✔' : 'Pending'}</p>
      <button onClick={nextTask}>Next Task</button>
      <FancyText title={true} text="Stay motivated!" />
    </div>
  );
};

export default TaskGenerator;
