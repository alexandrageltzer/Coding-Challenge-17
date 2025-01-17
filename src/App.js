
import React from 'react';
import './App.css'; 
import TaskGenerator from './TaskGenerator'; // Import TaskGenerator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Task Management and Motivation App</h1>
      </header>
      <main className="App-main">
        <TaskGenerator />
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;
