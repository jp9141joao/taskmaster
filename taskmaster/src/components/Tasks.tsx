import { useState, useEffect } from 'react';

function Tasks() {
  // State for input field value
  const [input, setInput] = useState<string>('');
  // State for storing the list of tasks
  const [tasks, setTasks] = useState<string[]>([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const tasksStorage = localStorage.getItem('@tasks'); // Try to get tasks from localStorage
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage)); // If found, set them in state
    }
  }, []);

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem('@tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevent default form behavior (page reload)

    // If the input is empty or contains only whitespace, do nothing
    if (!input.trim()) return;

    // Add the new task to the task list
    setTasks([...tasks, input]);

    // Clear the input field
    setInput('');
  }

  return (
    <div className='form-container'>
      <h1>Task Registration</h1>

      {/* Form to add a task */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a task"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state on every keystroke
        />
        <button type="submit">Add</button>
      </form>

      {/* List of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // Render each task as a list item
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
