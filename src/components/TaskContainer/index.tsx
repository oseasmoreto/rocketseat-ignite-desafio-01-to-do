import { ClipboardText, Trash } from 'phosphor-react'
import { useState } from 'react'
import { NoTask } from '../NoTask';

import styles from './index.module.css';

export function TaskContainer() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.info}>
        <p className={styles.tasksCreated}>Tarefas criadas <span className={styles.counterTasks}>0</span></p>
        <p className={styles.tasksCompleted}>Concluídas <span className={styles.counterTasks}>0</span></p>
      </div>

      <NoTask />
      
      <div className={styles.boxTasks}>
          <div className={styles.task}>
            <input type="checkbox" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. 
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
          </div>
          <div className={styles.task}>
            <input type="checkbox" checked />
            <p className={ styles.taskCompleted }>
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
          </div>
      </div> 
    </div>
  )
}