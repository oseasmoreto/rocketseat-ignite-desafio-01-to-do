import { useEffect, useState } from 'react';
import { Form } from '../Form';
import { Header } from '../Header';
import { TaskContainer } from '../TaskContainer';

import styles from './index.module.css';

import { TaskService } from "../../services/task.service";

export function App() {
  const [tasks, setTasks]                   = useState(TaskService.getTasksLocalStorage('tasks'));
  const [completedTasks, setCompletedTasks] = useState(TaskService.getTasksLocalStorage('tasks-completed'));

  /**
   * Função responsável por deletar a task
   * @param string  taskToDelete 
   * @param boolean completed 
   * @returns 
  */
  function deleteTask(taskToDelete: string, completed:boolean): void{
    if(!completed){
      const tasksWithoutDeletedOn = tasks.filter(task => {
        return task.content !== taskToDelete;
      });
  
      setTasks(tasksWithoutDeletedOn);
      TaskService.setTasksLocalStorage(tasksWithoutDeletedOn,'tasks');
      return;
    }

    const tasksWithoutDeletedOn = completedTasks.filter(task => {
      return task.content !== taskToDelete;
    });

    setCompletedTasks(tasksWithoutDeletedOn);
    TaskService.setTasksLocalStorage(tasksWithoutDeletedOn,'tasks-completed');
  }

  /**
   * Função responsável por criar a task
   * @param string taskToCreate 
  */
  function createTask(taskToCreate: string): void{
    const items = TaskService.getTasksLocalStorage('tasks') || [];

    items.push({
      content: taskToCreate,
      completed: false
    })

    TaskService.setTasksLocalStorage(items,'tasks');
    setTasks(items);
  }

  /**
   * Função responsável por criar a task
   * @param string taskToCreate 
  */
  function completedTask(taskToComplete: string): void{
    const items = TaskService.getTasksLocalStorage('tasks-completed') || [];

    items.push({
      content: taskToComplete,
      completed: true
    })

    TaskService.setTasksLocalStorage(items,'tasks-completed');
    setCompletedTasks(items);
  }

  /**
   * Função responsável por atualizar a task
   * @param string taskToUpdate 
  */
  function updateTask(taskToUpdate: string, completed: boolean) :void{

    deleteTask(taskToUpdate,completed);

    //SE A TASK NÃO ESTIVER COMPLETA, ELA É COMPLETA
    if(!completed) completedTask(taskToUpdate);

    //SE A TASK ESTIVER COMPLETA, ELA É RECRIADA
    if(completed) createTask(taskToUpdate);
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
            onUpdateTask={updateTask}
          />
        </main>
      </div>
    </div>
  )
}
