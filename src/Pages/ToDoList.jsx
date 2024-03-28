import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className=''>
      <div className="max-w-md mx-auto mt-8 p-6 bg-blue-600 rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold mb-4">ToDo List</h2>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Введите новую задачу"
          className="flex-grow mr-2 py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-100"
        />
        <button
          onClick={addTask}
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Добавить задачу
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 border-t border-gray-200"
          >
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <button
          onClick={removeAllTasks}
          className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Удалить все задачи
        </button>
      </div>
    </div>
    </div>
  );
}

export default ToDoList;
