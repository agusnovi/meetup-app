import { useContext } from "react";

import FavoriteContext from "../context/favorite-context";

import styles from "./Card.module.css"

export default function Card({ id, title, desc }) {
  const ctx = useContext(FavoriteContext);

  const isFavorite = ctx.isFvorite(id)

    return (
      <div className={styles.card}>
        <div>
          <img src="/src/assets/bg.jpg" />
        </div>
        <div className={styles.desc}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              if (isFavorite) {
                ctx.removeFavorite(id)
              } else {
                ctx.addFavorite({
                  id, author: title, body: desc
                })
              }
            }}
          >
            {isFavorite ? 'Remove Favorite' : 'Add To Favorite'}
          </button>
        </div>
      </div>
    );
}