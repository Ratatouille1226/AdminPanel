import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* ЛОГО */}
      <div className={styles.logo}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Store Admin</span>
      </div>

      {/* НАВИГАЦИЯ */}
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <i className="fa-solid fa-house"></i>
          Главная
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <i className="fa-solid fa-box"></i>
          Мои товары
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <i className="fa-solid fa-bag-shopping"></i>
          Заказы
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <i className="fa-solid fa-chart-line"></i>
          Статистика
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <i className="fa-solid fa-gear"></i>
          Настройки
        </NavLink>
      </nav>

      {/* ВЫХОД */}
      <button className={styles.logout}>
        <i className="fa-solid fa-right-from-bracket"></i>
        Выйти
      </button>
    </aside>
  );
};
