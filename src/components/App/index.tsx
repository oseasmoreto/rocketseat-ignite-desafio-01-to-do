import { useEffect, useState } from 'react';
import { Form } from '../Form';
import { Header } from '../Header';
import { TaskContainer } from '../TaskContainer';

import styles from './index.module.css';

import { TaskService } from "../../services/task.service";

export function App() {
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

  function createTask(taskToCreate: string){
    const items = TaskService.getTasksLocalStorage('tasks') || [];

    items.push({
      content: taskToCreate,
      completed: false
    })

    TaskService.setTasksLocalStorage(items,'tasks');
    setTasks(items);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form 
          onCreateTask={createTask}
        />
        <main>
          <TaskContainer 
          tasks={tasks}
          completedTasks={completedTasks}
          onDeleteTask={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}
