import styles from "./Statistics.module.css";

export const Statistics = () => {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Статистика</h1>
          <p className={styles.subtitle}>Анализ продаж и активности магазина</p>
        </div>

        <select className={styles.select}>
          <option>Сегодня</option>
          <option>Неделя</option>
          <option>Месяц</option>
        </select>
      </div>

      {/* STATS */}
      <div className={styles.stats}>
        <div className={styles.card}>
          <span>Выручка</span>
          <h2>$1 240</h2>
        </div>

        <div className={styles.card}>
          <span>Заказы</span>
          <h2>32</h2>
        </div>

        <div className={styles.card}>
          <span>Средний чек</span>
          <h2>$38</h2>
        </div>

        <div className={styles.card}>
          <span>Посещения</span>
          <h2>2.3K</h2>
        </div>
      </div>

      {/* CHART */}
      <div className={styles.block}>
        <h3>Продажи</h3>

        <div className={styles.chartPlaceholder}>График будет здесь</div>
      </div>

      {/* TOP PRODUCTS */}
      <div className={styles.block}>
        <h3>Популярные товары</h3>

        <div className={styles.products}>
          <div className={styles.product}>
            <span>Пижама шелковая</span>
            <b>12 продаж</b>
          </div>

          <div className={styles.product}>
            <span>Комплект белья</span>
            <b>9 продаж</b>
          </div>

          <div className={styles.product}>
            <span>Ноутбук</span>
            <b>5 продаж</b>
          </div>
        </div>
      </div>
    </div>
  );
};
