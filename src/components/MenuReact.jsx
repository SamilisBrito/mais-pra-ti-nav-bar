import { useState } from "react";
import react from "../assets/react.png";
import styles from "./MenuReact.module.css";

const contents = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

export function MenuReact() {
  const [currentIssue, setcurrentIssue] = useState(0);

  return (
    <div className={styles.componet}>
      <header className={styles.header}>
        <a href="#">
          <img src={react} width={70} alt="logo react" />
        </a>
        <div>
          <h1>React.Js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <nav className={styles.navButton}>
        <button
          className={`${styles.button} ${0 === currentIssue && styles.active}`}
          onClick={() => setcurrentIssue(0)}
        >
          Why React?
        </button>
        <button
          className={`${styles.button} ${1 === currentIssue && styles.active}`}
          onClick={() => setcurrentIssue(1)}
        >
          Core Features
        </button>
        <button
          className={`${styles.button} ${2 === currentIssue && styles.active}`}
          onClick={() => setcurrentIssue(2)}
        >
          Related Resources
        </button>
        <button
          className={`${styles.button} ${3 === currentIssue && styles.active}`}
          onClick={() => setcurrentIssue(3)}
        >
          React vs JS
        </button>
      </nav>

      <ul className={styles.content}>
        {contents[currentIssue].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
