import { useState } from "react";
import styles from "./Orders.module.css";

export const Orders = () => {
  const [status1, setStatus1] = useState("new");
  const [status2, setStatus2] = useState("processing");

  const getStatusClass = (status: string) => {
    return `${styles.status} ${styles[status]}`;
  };

  return (
    <div className={styles.page}>
      <h1>Заказы</h1>

      <div className={styles.table}>
        {/* HEADER */}
        <div className={styles.row + " " + styles.head}>
          <span>ID</span>
          <span>Клиент</span>
          <span>Телефон</span>
          <span>Сумма</span>
          <span>Статус</span>
          <span>Действия</span>
        </div>

        {/* ROW 1 */}
        <div className={styles.row}>
          <span>#a176</span>
          <span>Андрей</span>
          <span>+7904...</span>
          <span>120 €</span>

          <select
            value={status1}
            onChange={(e) => setStatus1(e.target.value)}
            className={getStatusClass(status1)}
          >
            <option value="new">Новый</option>
            <option value="processing">В обработке</option>
            <option value="shipped">Отправлен</option>
            <option value="completed">Завершён</option>
            <option value="cancelled">Отменён</option>
          </select>

          <button className={styles.viewBtn}>Открыть</button>
        </div>

        {/* ROW 2 */}
        <div className={styles.row}>
          <span>#0cfa</span>
          <span>Иван</span>
          <span>+7999...</span>
          <span>29.99 €</span>

          <select
            value={status2}
            onChange={(e) => setStatus2(e.target.value)}
            className={getStatusClass(status2)}
          >
            <option value="new">Новый</option>
            <option value="processing">В обработке</option>
            <option value="shipped">Отправлен</option>
            <option value="completed">Завершён</option>
            <option value="cancelled">Отменён</option>
          </select>

          <button className={styles.viewBtn}>Открыть</button>
        </div>
      </div>
    </div>
  );
};
