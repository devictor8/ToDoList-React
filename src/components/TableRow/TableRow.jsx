import React, { useContext, useState } from 'react';
import './TableRow.css';
import propTypes from 'prop-types';
import { deleteTask, updateTask } from '../../api/handleTasks';
import TaskContext from '../../contexts/TasksContext';
import formatDate from '../../utils/formatDate';
import EditInput from '../EditInput/EditInput';

export default function TableRow({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    id, title, createdAt,
  } = task;
  const { updateTable } = useContext(TaskContext);

  const handleDelete = async () => {
    await deleteTask(id);
    updateTable();
  };

  const handleEdit = async (updatedTask) => {
    await updateTask(updatedTask);
    updateTable();
  };

  return (
    <tr>
      <td>{!isEditing ? title : <EditInput task={task} handleEdit={handleEdit} setIsEditing={setIsEditing} />}</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <select onChange={({ target }) => handleEdit({ ...task, status: target.value })}>
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="conluída">concluída</option>
        </select>
      </td>
      <td>
        <button onClick={() => setIsEditing(!isEditing)} type="button" className="btn-action">
          <span className="material-symbols-outlined">
            edit
          </span>
        </button>
        <button onClick={handleDelete} type="button" className="btn-action">
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  task: propTypes.shape(),
}.isRequired;
