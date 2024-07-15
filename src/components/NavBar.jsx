import  styles from "./NavBar.module.css"
export function NavBar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.img}
        src="https://avatars.githubusercontent.com/u/63266170?v=4"
        width={70}
        alt="foto da mais linda"
      />
      <ul className={styles.navUl}>
        <li >
          <a className={styles.item} href="#">Sobre</a>
        </li>
        <li>
          <a className={styles.item} href="#">Contato</a>
        </li>
        <li>
          <a className={styles.item} href="#">Serviços</a>
        </li>
      </ul>
    </nav>
  );
}
