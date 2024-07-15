import { useState } from "react";
import styles from "./TextArea.module.css"

export function TextArea() {
  const [text, setText] = useState("");

  function onTextChange(event) {
    const text = event.target.value;
    setText(text);
  }
  return (
    <div className={styles.componet}>
      <h2>Texto com estado</h2>

      <textarea className={styles.textArea}
        placeholder="test"
        onChange={onTextChange}
        value={text}
      ></textarea>
      <p>{text}</p>
    </div>
  );
}
