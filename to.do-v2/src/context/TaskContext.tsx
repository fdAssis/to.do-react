import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskContextType {
  tasks: ITask[];
  totalTasks: number;
  totalTasksCompleted: number;
  createNewTask: (title: string) => void;
  changeTaskStatus: (id: string) => void;
  removeTask: (id: string) => void;
}

interface TaskContextProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  function createNewTask(title: string) {
    const newTask: ITask = {
      id: uuidV4(),
      title,
      isCompleted: false,
    };

    setTasks((state) => {
      return [...state, newTask];
    });
  }

  function changeTaskStatus(id: string) {
    setTasks((state) => {
      const task = state.find((task) => task.id === id);

      if (!task) {
        return [...state];
      }
      const newTask: ITask = {
        id: task.id,
        title: task.title,
        isCompleted: !task.isCompleted,
      };
      const newState = state.filter((task) => task.id !== id);

      return [...newState, newTask];
    });
  }

  function removeTask(id: string) {
    setTasks((state) => {
      const tasks = state.filter((item) => item.id !== id);
      return [...tasks];
    });
  }

  useEffect(() => {
    setTotalTasks(tasks.length);

    setTotalTasksCompleted(
      tasks.filter((item) => item.isCompleted === true).length
    );
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        changeTaskStatus,
        totalTasks,
        totalTasksCompleted,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
