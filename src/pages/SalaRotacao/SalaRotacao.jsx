import Card from "../../components/Card/Card";
import styles from "./SalaRotacao.module.css";
import imgCristianismo from "../../assets/cristianismo.jpg";
import imgBiblia from "../../assets/biblia.webp";
import imgManso from "../../assets/manso.jpg"

function SalaRotacao() {

  return (
    <div className={styles.container}>
      <h1>Principais livros</h1>
      <p>Na Zion, cada livro foi escolhido com propósito. Nossa seleção reúne obras que fortalecem a fé, inspiram o coração e aproximam pessoas da Palavra de Deus. Entre clássicos cristãos, devocionais, estudos bíblicos e leituras transformadoras, queremos oferecer mais do que páginas — queremos proporcionar encontros com esperança, sabedoria e propósito.</p>

      <div className={styles.cards}>
        <Card
          titulo="Cristianismo Puro e Simples"
          descricao="Uma das obras cristãs mais marcantes da literatura. Apresenta, de forma clara e profunda, os fundamentos da fé cristã, conduzindo o leitor a uma compreensão sincera do amor, verdade e do propósito de Deus para a humanidade."
          imagem={imgCristianismo}
        />

        <Card
          titulo="Bíblia Sagrada"
          descricao="A Palavra de Deus escrita. Um alimento para a alma, fonte de sabedoria e direção para a vida. Em cada capítulo, encontramos o amor do Pai, a graça de Cristo e a esperança que fortalece o coração todos os dias."
          imagem={imgBiblia}
        />

        <Card
          titulo="Manso e Humilde"
          descricao="Obra popular que explora profundamente o coração de Cristo, focando no descanso, consolo e graça para quem se sente cansado e sobrecarregado. Conduz o leitor a compreender a misericórdia e o amor incomparável de Cristo por aqueles que se aproximam d’Ele."
          imagem={imgManso}
        />
      </div>
    </div>
  );
}

export default SalaRotacao;