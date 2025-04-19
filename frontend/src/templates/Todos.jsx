import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Fetch the API URL from environment variable
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/todos/`);
      setTasks(response.data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${apiUrl}/api/todos/${taskId}/delete`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  const addTask = async () => {
    try {
      if (inputValue.trim() !== '') {
        const response = await axios.post(`${apiUrl}/api/todos/add`, {
          title: inputValue,
          completed: false,
        });
        setTasks([...tasks, response.data]);
        setInputValue('');
      }
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  const toggleCompleted = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      if (taskToUpdate) {
        const response = await axios.put(`${apiUrl}/api/todos/${taskId}/update`, {
          completed: !taskToUpdate.completed,
        });
        const updatedTasks = tasks.map((task) =>
          task.id === taskId
            ? { ...task, completed: response.data.completed }
            : task
        );
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.log('Error toggling task completion:', error);
    }
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          <h2>To-do app</h2>
          <i className="fa-solid fa-book-bookmark"></i>
        </div>
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="add your tasks"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleCompleted(task.id)}
              className={task.completed ? 'checked' : ''}
            >
              {task.completed ? <del>{task.title}</del> : task.title}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              >
                {' '}
                X{' '}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
