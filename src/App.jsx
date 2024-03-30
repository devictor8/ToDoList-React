import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskTable from './components/TaskTable/TaskTable';
import TaskProvider from './contexts/tasksProvider';

function App() {
  return (
    <main className="app">
      <TaskProvider>
        <TaskForm />
        <TaskTable />
      </TaskProvider>
    </main>
  );
}

export default App;
