
import React from 'react';
import './App.css'; // Import your CSS for App styling
import FancyText from './FancyText'; // Import FancyText component
import TaskGenerator from './TaskGenerator'; // Import TaskGenerator component

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title={true} text="Task Management and Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default App;
