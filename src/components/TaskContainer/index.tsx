import { ClipboardText, Trash } from 'phosphor-react'
import { useState } from 'react'
import { NoTask } from '../NoTask';

import styles from './index.module.css';

export function TaskContainer() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      completed: false,
      content: "Fazer curso do mês."
    }
  ]);
  const [completedTasks, setCompletedTasks] = useState([
    {
      id: 1,
      completed: true,
      content: "Ir na academia."
    },
    {
      id: 2,
      completed: true,
      content: "Comer um pastel"
    }]);

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.info}>
        <p className={styles.tasksCreated}>Tarefas criadas <span className={styles.counterTasks}>{ tasks.length }</span></p>
        <p className={styles.tasksCompleted}>Concluídas <span className={styles.counterTasks}>{ completedTasks.length } de {completedTasks.length + tasks.length}</span></p>
      </div>

      {tasks.length == 0 && <NoTask /> }
      
      {tasks.length > 0 &&
        <div className={styles.boxTasks}>
          { tasks.map(task =>{
            return (
              <div key={task.id} className={styles.task}>
                <input type="checkbox" />
                <p>
                  { task.content}
                </p>
                <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
              </div>
            )
          }) }
          { completedTasks.map(task =>{
            return (
              <div key={task.id} className={styles.task}>
                <input checked type="checkbox" />
                <p className={ styles.taskCompleted }>
                  { task.content}
                </p>
                <button className={styles.deleteTask}><Trash size="1.5rem" /></button>
              </div>
            )
          }) }
        </div> 
      }
    </div>
  )
}