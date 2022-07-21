import { useState } from 'react';

import styles from './index.module.css';
import clipboard from '../../assets/clipboard.svg';

export function NoTask() {
  return (
    <div className={styles.boxNoTask}>
      <img src={clipboard} alt="Clipboard" />
      <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}