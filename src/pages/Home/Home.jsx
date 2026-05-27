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

      <p className= {styles.p}> A Zion nasceu primeiro no coração de Deus e depois no desejo de transformar um simples café em um lugar de encontro com aquilo que realmente importa.<br />
      Em um mundo tão apressado, sonhamos com um ambiente onde as pessoas pudessem respirar fundo, descansar o coração e reencontrar esperança através da presença de Deus, de boas conversas e de histórias que edificam a alma.<br />
      Cada livro em nossas estantes, cada xícara servida e cada detalhe do ambiente carrega um propósito: acolher vidas. Acreditamos que Deus se revela também nos momentos simples — em uma conversa tranquila, em uma página que toca o coração ou no silêncio de uma manhã acompanhada de café e oração.
      Mais do que uma livraria e cafeteria, a Zion é um refúgio. Um espaço criado para inspirar, aproximar pessoas e lembrar que fé, amor e propósito ainda podem ser encontrados nas pequenas coisas.</p>
    </div>
  );
}

export default Home;