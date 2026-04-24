import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Панель управления</h1>

      <div className={styles.user}>
        <span>Хуйкин</span>
      </div>
    </header>
  );
};
