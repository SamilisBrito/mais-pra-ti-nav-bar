/* eslint-disable react/prop-types */
import styles from "./TaskList.module.css"

export function Task(props) {
  return (
    <li className={styles.list}>
      <h3>Tarefa {props.posicao + 1}</h3>
      <p>{props.texto}</p>
    </li>
  );
}
