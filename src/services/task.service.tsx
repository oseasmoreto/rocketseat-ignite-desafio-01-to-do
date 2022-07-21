interface Task{
  id: string;
  content: string;
  completed: boolean;
}

export const TaskService = {
  initTaskLocalStorage: function(type: string){
    if(!localStorage.getItem(type)){
      localStorage.setItem(type,JSON.stringify([]));
    }
  },
  setTasksLocalStorage: function(tasks: Task[], type: string) : Task[]{
    localStorage.setItem(type, JSON.stringify(tasks));
    return tasks;
  },
  getTasksLocalStorage: function(type: string) : Task[]{
    return JSON.parse(localStorage.getItem(type)!) || [];
  }
}