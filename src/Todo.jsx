import React, { useEffect, useState } from 'react';
import './Toda.css'; // Correct the import filename
import AddTask from './AddTask';
import ListTask from './ListTask';
 // Import required components

function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;
  }, [tasks]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask); // Correct the variable name to setTasks
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask); // Correct the variable name to setTasks
  };

  return (
    <div className='todo-container'> {/* Removed extra <div> */}
      <div className='header'>TODO APP</div>
      <div className='addTask'>
        <AddTask addTask={addTask} />
      </div>
      <div className='listtasks'>
        {tasks.map((task, index) => (
          <ListTask
            task={task}
            removeTask={removeTask}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
