import React, { useState } from 'react';
import propTypes from 'prop-types';
import TaskContext from './TasksContext';
import { getAllTasks } from '../api/handleTasks';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const updateTable = async () => {
    getAllTasks().then((data) => setTasks(data))
  }

  return (
    <TaskContext.Provider value={{tasks, updateTable}}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: propTypes.any,
}.isRequired;
