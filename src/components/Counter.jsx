import { useState } from "react";
import styles from "./Counter.module.css"

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.componet}>
      <h2>Contador</h2>
      <p>Você clicou <span className={styles.value}>{count} </span>vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
