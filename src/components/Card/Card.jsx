import styles from "./Card.module.css";

function Card({ titulo, descricao }) {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;