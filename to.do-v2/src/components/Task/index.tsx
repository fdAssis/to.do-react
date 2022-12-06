import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ITask, TaskContext } from "../../context/TaskContext";
import styles from "./styles.module.css";

export function Task({ isCompleted, title, id }: ITask) {
  const { changeTaskStatus, removeTask } = useContext(TaskContext);

  function handleSetTaskAsConcluded() {
    changeTaskStatus(id);
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          type="checkbox"
          name=""
          value="false"
          defaultChecked={isCompleted}
          onClick={handleSetTaskAsConcluded}
        />
        <div>
          <p>{title}</p>
        </div>
      </div>
      <button onClick={() => removeTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
