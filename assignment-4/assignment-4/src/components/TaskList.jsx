import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Task"
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button onClick={addTask} style={{ marginLeft: '1rem' }}>Add</button>

      <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
