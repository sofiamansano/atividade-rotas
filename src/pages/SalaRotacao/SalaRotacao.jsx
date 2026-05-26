import Card from "../../components/Card/Card";
import styles from "./SalaRotacao.module.css";

function SalaRotacao() {
  return (
    <div className={styles.container}>
      <h1>Principais livros</h1>

      <div className={styles.cards}>
        <Card
          titulo="Cristianismo Puro e Simples"
          descricao="Aborda a lógica, os fundamentos e a vivência da fé de forma clara e acessível."
        />

        <Card
          titulo="Bíblia Sagrada"
          descricao="A Palavra de Deus escrita. Um guia infalível de fé e um manual de de vida."
        />

        <Card
          titulo="Manso e Humilde"
          descricao="Obra popular que explora profundamente o coração de Cristo, focando no descanso, consolo e graça para quem se sente cansado e sobrecarregado."
        />
      </div>
    </div>
  );
}

export default SalaRotacao;