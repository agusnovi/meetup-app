import styles from "./Card.module.css"

export default function Card({title, desc}) {
    return (
      <div className={styles.card}>
        <div>
          <img src="/src/assets/bg.jpg" />
        </div>
        <div className={styles.desc}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <button type="button" className={styles.button}>
            To Favorite
          </button>
        </div>
      </div>
    );
}