import { useState, useEffect } from 'react';

interface User {
  nome: string;
  email: string;
  idade: string;
}

function Cadastro() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [idade, setIdade] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [nomeSalvo, setNomeSalvo] = useState<string>('');

  useEffect(() => {
    const nomeStorage = localStorage.getItem('nomeUsuario');
    if (nomeStorage) {
      setNomeSalvo(nomeStorage);
    } else {
      const nomePrompt = prompt('Qual é o seu nome?');
      if (nomePrompt) {
        localStorage.setItem('nomeUsuario', nomePrompt);
        setNomeSalvo(nomePrompt);
      }
    }
  }, []);

  function handleRegistro(e: React.FormEvent) {
    e.preventDefault();
    setUser({ nome, email, idade });
  }

  return (
    <div>
      <h1>Bem-vindo, {nomeSalvo}! Sua lista de tarefas</h1>
      <form onSubmit={handleRegistro}>
        <label>Nome: </label><br />
        <input placeholder="Digite seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
        <label>Email: </label><br />
        <input placeholder="Digite seu Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label>Idade: </label><br />
        <input placeholder="Digite sua Idade" value={idade} onChange={(e) => setIdade(e.target.value)} /><br />
        <button type="submit">Registrar</button>
      </form>
      <br /><br />
      {user && (
        <div>
          <span>Bem-vindo, {user.nome}</span><br />
          <span>Idade: {user.idade}</span><br />
          <span>Email: {user.email}</span><br />
        </div>
      )}
    </div>
  );
}

export default Cadastro;
