import styles from "./Contatos.module.css";

function Contatos() {
  return (
    <div className={styles.container}>
      <h1>Fale Conosco</h1>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Digite seu nome"
        />

        <input
          type="email"
          placeholder="Digite seu email"
        />

        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contatos;