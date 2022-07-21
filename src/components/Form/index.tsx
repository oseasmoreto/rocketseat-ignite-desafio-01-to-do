import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './index.module.css';

interface FormProps {
  onCreateTask: (task: string) => void;
}

export function Form({onCreateTask} : FormProps) {

  const [task, setTask] = useState('');

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    onCreateTask(task);
    setTask('');
  }

  function handleNewTextTask(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  const isNewTaskEmpty = task.length === 0;

  return (
    <div className={styles.form}>
      <form onSubmit={handleCreateNewTask} method="post">
        <input 
          type="text" 
          name="task" 
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTextTask} 
          value={task} 
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button disabled={isNewTaskEmpty} className={styles.createToDo} type="submit">Criar <PlusCircle size={16} /></button>
      </form>
    </div>
  )
}