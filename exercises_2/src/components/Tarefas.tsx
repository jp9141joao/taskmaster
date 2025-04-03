import { useState, useEffect } from 'react';

function Tarefas() {
  const [input, setInput] = useState<string>('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistro(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegistro}>
        <input placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
