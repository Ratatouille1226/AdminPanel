import styles from "./Settings.module.css";

export const Settings = () => {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Настройки магазина</h1>
          <p className={styles.subtitle}>Управление информацией о магазине</p>
        </div>

        <button className={styles.saveBtn}>
          <i className="fa-solid fa-floppy-disk"></i>
          Сохранить
        </button>
      </div>

      {/* FORM */}
      <div className={styles.card}>
        <div className={styles.row}>
          <label>Название магазина</label>
          <input type="text" placeholder="My Store" />
        </div>

        <div className={styles.row}>
          <label>О нас</label>
          <textarea placeholder="Расскажите о магазине..." />
        </div>

        <div className={styles.row}>
          <label>Контакты</label>
          <input type="text" placeholder="+7 999 999 99 99" />
        </div>

        <div className={styles.row}>
          <label>Email</label>
          <input type="email" placeholder="store@mail.com" />
        </div>

        <div className={styles.row}>
          <label>Адрес</label>
          <input type="text" placeholder="Istanbul, Turkey" />
        </div>
      </div>
    </div>
  );
};
