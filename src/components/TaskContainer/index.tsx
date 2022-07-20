import { ClipboardText } from 'phosphor-react'
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
  </div>
 )
}