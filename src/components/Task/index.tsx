import { InputHTMLAttributes, useState } from 'react'
import { Trash } from 'phosphor-react'

import styles from './index.module.css';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  checked?: boolean;
}

export function Task({ content, ...props} : TaskProps) {
  return (
    <div key={content} className={styles.task}>
      <input {...props} type="checkbox" />
      <p className={ props.checked ? styles.taskCompleted : ''}>
        { content }
      </p>
      <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
    </div>
  )
}