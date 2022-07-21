import { ClipboardText, Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './index.module.css';
import clipboard from '../../assets/clipboard.svg';

export function TaskContainer() {
 return (
  <div className={styles.tasksContainer}>
    <div className={styles.info}>
      <p className={styles.tasksCreated}>Tarefas criadas <span className={styles.counterTasks}>0</span></p>
      <p className={styles.tasksCompleted}>Concluídas <span className={styles.counterTasks}>0</span></p>
    </div>
    <div className={styles.boxNoTask}>
      <img src={clipboard} alt="Clipboard" />
      <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
    <div className={styles.boxTasks}>
        <div className={styles.taskOpen}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
        </div>
        <div className={styles.taskClose}>
          <input type="checkbox" checked />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
        </div>
    </div> 
  </div>
 )
}