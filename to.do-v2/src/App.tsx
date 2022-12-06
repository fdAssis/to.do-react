import { FormEvent, useContext, useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import styles from "./app.module.css";
import { PlusCircle } from "phosphor-react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { createNewTask, tasks, totalTasks, totalTasksCompleted } =
    useContext(TaskContext);
  const [title, setTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    createNewTask(title);

    setTitle("");
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicionar uma nova tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
        <div className={styles.info}>
          <div className={styles.taskCreated}>
            <strong>Tarefas criadas</strong>
            <div>
              <span>{String(totalTasks).padStart(2, "0")}</span>
            </div>
          </div>
          <div className={styles.taskCompleted}>
            <strong>Concluídas</strong>
            <div>
              <span>
                {String(totalTasksCompleted)} de {String(totalTasks)}
              </span>
            </div>
          </div>
        </div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              id={task.id}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
