import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Zion • Café com Propósito</h1>

      <p>
        Bem-vindo à Zion, um lugar onde fé, conhecimento e aconchego se encontram. 
        Entre páginas inspiradoras e o aroma de um bom café, criamos um espaço para descansar a mente, 
        fortalecer a alma e viver momentos especiais.
      </p>

      <img src="src/assets/livraria.png" alt="Livraria/Cafeteria" />
    </div>
  );
}

export default Home;