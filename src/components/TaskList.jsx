import { useState } from "react";
import { Task } from "./Task";
import styles from "./TaskList.module.css"

export function TaskList() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  function onTextChange(event) {
    const text = event.target.value;
    setText(text);
  }

  function teste() {
    setTexts([...texts, text]);
    setText("");
  }

  return (
    <div className={styles.componet}>
      <h2>Lista</h2>

      <input
      className={styles.input}
        type="text"
        placeholder="tarefa"
        onChange={onTextChange}
        value={text}
      ></input>
      <button onClick={() => teste()}>Adicionar</button>
      <ul className={styles.lists}>
        {texts.map((item, index) => (
          <Task key={item} texto={item} posicao={index} />
        ))}
      </ul>
    </div>
  );
}
