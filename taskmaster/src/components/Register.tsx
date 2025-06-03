import { useState, useEffect } from 'react';

// User interface type definition
interface User {
  nome: string;   // Name
  email: string;  // Email
  idade: string;  // Age
}

function Register() {
  // States to store form input values
  const [nome, setNome] = useState<string>('');       // User's name input
  const [email, setEmail] = useState<string>('');     // User's email input
  const [idade, setIdade] = useState<string>('');     // User's age input

  // Stores the user data after submission
  const [user, setUser] = useState<User | null>(null);

  // Stores the saved name retrieved from localStorage or prompt
  const [nomeSalvo, setNomeSalvo] = useState<string>('');

  // Runs only once on component mount
  useEffect(() => {
    const nomeStorage = localStorage.getItem('nomeUsuario'); // Get name from localStorage

    if (nomeStorage && nomeStorage !== 'null') {
      // If there's a valid saved name, use it
      setNomeSalvo(nomeStorage);
    } else {
      // Otherwise, prompt the user for their name
      const nomePrompt = prompt('What is your name?') || '';
      if (nomePrompt.trim() !== '') {
        // Save the name and update state
        localStorage.setItem('nomeUsuario', nomePrompt);
        setNomeSalvo(nomePrompt);
      }
    }
  }, []); // Empty dependency array: runs once

  // Form submission handler
  function handleRegistro(e: React.FormEvent) {
    e.preventDefault(); // Prevent page reload
    setUser({ nome, email, idade }); // Save user data to state
  }

  return (
    <div className='form-container'>
      <h1>Welcome, {nomeSalvo}! Your task list</h1>
      
      {/* Registration form */}
      <form onSubmit={handleRegistro}>
        <label>Name: </label><br />
        <input 
          placeholder="Enter your name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />
        
        <label>Email: </label><br />
        <input 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        
        <label>Age: </label><br />
        <input 
          placeholder="Enter your age"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br />
        
        <button type="submit">Register</button>
      </form>

      <br /><br />

      {/* Display the registered user info if exists */}
      {user && (
        <div>
          <span>Welcome, {user.nome}</span><br />
          <span>Age: {user.idade}</span><br />
          <span>Email: {user.email}</span><br />
        </div>
      )}
    </div>
  );
}

export default Register;
