import { InputHTMLAttributes, useState } from 'react'
import { Trash } from 'phosphor-react'

import styles from './index.module.css';
import { TaskService } from '../../services/task.service';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  onDeleteTask: (task: string, completed: boolean) => void;
  onUpdateTask: (task: string, completed: boolean) => void;
}

export function Task({ content, onDeleteTask, onUpdateTask, ...props} : TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(content,props.defaultChecked!);
  }

  function handleUpdateTask(){
    onUpdateTask(content,props.defaultChecked!);
  }

  return (
    <div key={content} className={styles.task}>
      <input {...props} onChange={handleUpdateTask} type="checkbox" />
      <p className={ props.defaultChecked ? styles.taskCompleted : ''}>
        { content }
      </p>
      <button onClick={() => handleDeleteTask()} className={styles.deleteTask}><Trash size="1.5rem" /></button>
    </div>
  )
}