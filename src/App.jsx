import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { MenuReact } from "./components/MenuReact";
import { TextArea } from "./components/TextArea";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";

function App() {
  const socialNetworks = ["instagram", "facebook", "LinkedIn"];

  return (
    <div id={styles.body}>
      <NavBar />
      <main className={styles.main}>
        <Counter />
        <TextArea />
        <TaskList />
        <MenuReact />
      </main>
      <Footer socialNetworks={socialNetworks} />
    </div>
  );
}

export default App;
