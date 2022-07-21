import { InputHTMLAttributes, useState } from 'react'
import { Trash } from 'phosphor-react'

import styles from './index.module.css';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  onDeleteTask: (task: string, completed: boolean) => void;
}

export function Task({ content, onDeleteTask, ...props} : TaskProps) {

  function handleDeleteComment(){
    onDeleteTask(content,props.defaultChecked!);
  }

  return (
    <div key={content} className={styles.task}>
      <input {...props} type="checkbox" />
      <p className={ props.defaultChecked ? styles.taskCompleted : ''}>
        { content }
      </p>
      <button onClick={() => handleDeleteComment()} className={styles.deleteTask}><Trash size="1.5rem" /></button>
    </div>
  )
}