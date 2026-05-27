import styles from "./Header.module.css";
import MenuLink from "../MenuLink/MenuLink";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Zion ᨒ
      </div>

      <nav className={styles.menu}>
            <MenuLink
            to="/">
              Home
            </MenuLink>

            <MenuLink
            to="/sala-rotacao">
              Sala de Rotação
            </MenuLink>

            <MenuLink
            to="/contatos">
              Contatos
            </MenuLink>
      </nav>

    </header>
  );
}

export default Header;