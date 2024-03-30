export const getAllTasks = async () => {
  const response = await fetch('https://todolist-node-crud.onrender.com/tasks');
  const data = response.json();
  return data;
};

export const deleteTask = async (id) => {
  await fetch(`https://todolist-node-crud.onrender.com/tasks/${id}`, {
    method: 'delete',
  });
};

export const createTask = async (title) => {
  await fetch('https://todolist-node-crud.onrender.com/tasks', {
    method: 'post',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ title }),
  });
};

export const updateTask = async (task) => {
  const { id, title, status } = task;
  await fetch(`https://todolist-node-crud.onrender.com/tasks/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ title, status }),
  });
};
