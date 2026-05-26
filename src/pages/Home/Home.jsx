import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo à Zion Livraria!</h1>

      <p>
        A Zion Livraria nasceu para tocar vidas através da Palavra e espalhar esperança em cada página.
        Entre livros, devocionais e mensagens de fé, queremos acolher corações e aproximar pessoas de Deus.
        Porque cada história lida aqui pode se transformar em um novo começo guiado pela graça e pelo amor.
      </p>

      <img src="src/assets/livraria.png" alt="Livraria/Cafeteria" />
    </div>
  );
}

export default Home;