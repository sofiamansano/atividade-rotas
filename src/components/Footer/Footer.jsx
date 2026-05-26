import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Zion Livraria © 2026</p>

      <p>Desenvolvido por Sofia Mansano</p>

      <a
        href="https://github.com/"
        target="_blank"
      >
        GitHub do Desenvolvedor
      </a>
    </footer>
  );
}

export default Footer;