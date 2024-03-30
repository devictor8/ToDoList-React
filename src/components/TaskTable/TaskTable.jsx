import React, { useContext, useEffect } from 'react';
import './TaskTable.css';
import TableRow from '../TableRow/TableRow';
import TaskContext from '../../contexts/TasksContext';

export default function TaskTable() {
  const { tasks, updateTable } = useContext(TaskContext);
  useEffect(() => {
    updateTable();
  }, []);

  return (
    <div className="container">
      <table className="task-table">
        <thead>
          <th>Tarefa</th>
          <th>Criada em</th>
          <th>Status</th>
          <th>Ações</th>
        </thead>
        <tBody>
          {tasks.map((task) => <TableRow key={task.id} task={task} />)}
        </tBody>
      </table>
    </div>

  );
}
