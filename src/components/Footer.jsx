import styles from "./Footer.module.css";

export function Footer({ socialNetworks }) {
  return (
    <footer className={styles.footer}>
      <menu className={styles.menu}>
        {socialNetworks.map((element, id) => (
          <li key={id}>
            <a href="#">{element}</a>{" "}
          </li>
        ))}
      </menu>

      <h2 className={styles.h2}>Samilis top</h2>
      <p>Alguns direitos reservados</p>
    </footer>
  );
}
