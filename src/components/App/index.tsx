import { useEffect, useState } from 'react';
import { Form } from '../Form';
import { Header } from '../Header';
import { TaskContainer } from '../TaskContainer';

import styles from './index.module.css';

import { TaskService } from "../../services/task.service";

export function App() {

  TaskService.initTaskLocalStorage('tasks');
  TaskService.initTaskLocalStorage('tasks-completed');

  function createTask(taskToCreate: string){
    const items = TaskService.getTasksLocalStorage('tasks');

    items.push({
      content: taskToCreate,
      completed: false
    })

    TaskService.setTasksLocalStorage(items,'tasks');
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form 
          onCreateTask={createTask}
        />
        <main>
          <TaskContainer />
        </main>
      </div>
    </div>
  )
}
