import { useEffect, useState } from 'react'
import { NoTask } from '../NoTask';
import { Task } from '../Task';

import styles from './index.module.css';

import { TaskService } from "../../services/task.service";

interface Task{
  id: string;
  content: string;
  completed: boolean;
}

interface TaskContainerProps{
  tasks: Task[];
  completedTasks: Task[];
  onDeleteTask: (task: string, completed: boolean) => void;
  onUpdateTask: (id: string, task: string, completed: boolean) => void;
}

export function TaskContainer({tasks, completedTasks, onDeleteTask, onUpdateTask} : TaskContainerProps) {

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.info}>
        <p className={styles.tasksCreated}>Tarefas criadas <span className={styles.counterTasks}>{ tasks.length + completedTasks.length }</span></p>
        <p className={styles.tasksCompleted}>Concluídas <span className={styles.counterTasks}>{ completedTasks.length } de {completedTasks.length + tasks.length}</span></p>
      </div>

      {(tasks.length == 0 && completedTasks.length == 0) && <NoTask /> }
      
      {(tasks.length > 0 || completedTasks.length > 0) &&
        <div className={styles.boxTasks}>
          { tasks.map(task =>{
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  defaultChecked={task.completed}
                  onDeleteTask={onDeleteTask}
                  onUpdateTask={onUpdateTask}
                />
              )
            }) 
          }
          { completedTasks.map(task =>{
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  defaultChecked={task.completed}
                  onDeleteTask={onDeleteTask}
                  onUpdateTask={onUpdateTask}
                />
              )
            }) 
          }
        </div> 
      }
    </div>
  )
}