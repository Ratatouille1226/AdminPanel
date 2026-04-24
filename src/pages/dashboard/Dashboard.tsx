import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Добро пожаловать 👋</h1>
          <p className={styles.subtitle}>
            Управляйте вашим интернет-магазином из одной панели
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className={styles.block}>
        <h3>Возможности платформы</h3>

        <div className={styles.features}>
          <div>⚡ Быстрое управление товарами</div>
          <div>📦 Управление заказами</div>
          <div>📊 Аналитика продаж</div>
          <div>🎨 Настройка магазина</div>
          <div>🔗 API интеграции</div>
        </div>
      </div>

      {/* MARKETING BLOCK */}
      <div className={styles.promo}>
        <h2>Нужен интернет-магазин?</h2>

        <p>
          Мы создадим для вас современный интернет-магазин и подключим эту
          удобную админ-панель. Вы получите готовый бизнес под ключ.
        </p>

        <button className={styles.orderBtn}>Заказать магазин</button>
      </div>
    </div>
  );
};
