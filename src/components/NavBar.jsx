import cx from 'classnames';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import FavoriteContext from '../context/favorite-context';

import styles from './NavBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const ctx = useContext(FavoriteContext);

  const hasFavorite = ctx.total > 0

  return (
    <nav>
      <ul>
        <li className={styles.hideOnMobile}>
          <a>Meetup</a>
        </li>
        <li className={styles.hideOnMobile}>
          <Link to="/">All Meetup</Link>
        </li>
        <li className={styles.hideOnMobile}>
          <Link to="/add-new">Add New Meetup</Link>
        </li>
        <li className={cx(styles.withBadge, styles.hideOnMobile)}>
          <Link to="/favorite">My Favorites</Link>
          {hasFavorite && <p className={styles.badge}>{ctx.total}</p>}
        </li>
        <li className={styles.hideOnDesktop}>
          <p onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </p>
        </li>
      </ul>
      {open && (
        <ul className={styles.sidebar}>
          <li>
            <p onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </p>
          </li>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/add-new">Add New Meetup</Link>
          </li>
          <li className={styles.withBadge}>
            <Link to="/favorite">My Favorites</Link>
            {hasFavorite && <p className={styles.badge}>{ctx.total}</p>}
          </li>
        </ul>
      )}
    </nav>
  );
}
