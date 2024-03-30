import React, { useState } from 'react';
import propTypes from 'prop-types';

export default function EditInput({ task, handleEdit, setIsEditing }) {
  const { title } = task;
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleEdit({ ...task, title: newTitle });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-input"
        value={newTitle}
        onChange={({ target }) => { setNewTitle(target.value); }}
      />
    </form>
  );
}

EditInput.propTypes = {
  task: propTypes.any,
  func: propTypes.any,
}.isRequired;
