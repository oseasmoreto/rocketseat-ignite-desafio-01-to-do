import { useEffect, useState } from 'react'
import { NoTask } from '../NoTask';
import { Task } from '../Task';

import styles from './index.module.css';

import { TaskService } from "../../services/task.service";

export function TaskContainer() {
  const [tasks, setTasks]                   = useState(TaskService.getTasksLocalStorage('tasks'));
  const [completedTasks, setCompletedTasks] = useState(TaskService.getTasksLocalStorage('tasks-completed'));

  function deleteTask(taskToDelete: string, completed:boolean){

    if(!completed){
      const tasksWithoutDeletedOn = tasks.filter(task => {
        return task.content !== taskToDelete;
      });
  
      setTasks(tasksWithoutDeletedOn);
      TaskService.setTasksLocalStorage(tasksWithoutDeletedOn,'tasks');
      return true;
    }

    const tasksWithoutDeletedOn = completedTasks.filter(task => {
      return task.content !== taskToDelete;
    });

    setCompletedTasks(tasksWithoutDeletedOn);
    TaskService.setTasksLocalStorage(tasksWithoutDeletedOn,'tasks-completed');
  }

  useEffect(() => {
    const items = TaskService.getTasksLocalStorage('tasks');
    setTasks(items);
  }, tasks);

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.info}>
        <p className={styles.tasksCreated}>Tarefas criadas <span className={styles.counterTasks}>{ tasks.length }</span></p>
        <p className={styles.tasksCompleted}>Concluídas <span className={styles.counterTasks}>{ completedTasks.length } de {completedTasks.length + tasks.length}</span></p>
      </div>

      {(tasks.length == 0 && completedTasks.length == 0) && <NoTask /> }
      
      {(tasks.length > 0 || completedTasks.length > 0) &&
        <div className={styles.boxTasks}>
          { tasks.map(task =>{
            return (
              <Task 
                key={task.content}
                content={task.content}
                defaultChecked={task.completed}
                onDeleteTask={deleteTask}
              />
            )
          }) }
          { completedTasks.map(task =>{
            return (
              <Task 
                key={task.content}
                content={task.content}
                defaultChecked={task.completed}
                onDeleteTask={deleteTask}
              />
            )
          }) }
        </div> 
      }
    </div>
  )
}