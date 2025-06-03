// Import the Register and Tasks components
import Register from './components/Register';
import Tasks from './components/Tasks';
import './styles/global.css'

// Main App component that renders the entire application
function App() {
  return (
    <div>
      {/* Renders the user registration component */}
      <Register />

      {/* Renders the task list and task input component */}
      <Tasks />
    </div>
  );
}

export default App;
