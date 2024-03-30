import React, { useContext, useState } from 'react';
import './TaskForm.css';
import TaskContext from '../../contexts/TasksContext';
import { createTask } from '../../api/handleTasks';

export default function TaskForm() {
  const { updateTable } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask(taskTitle);
    updateTable();
    setTaskTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        placeholder="Adicionar tarefa"
        value={taskTitle}
        onChange={({ target }) => setTaskTitle(target.value)}
      />
      <button className="form-button" type="submit">+</button>
    </form>
  );
}
