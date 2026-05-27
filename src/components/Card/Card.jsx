import styles from "./Card.module.css";

function Card({ titulo, descricao, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.foto} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;