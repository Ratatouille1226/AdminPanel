import styles from "./Products.module.css";

export const Products = () => {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Мои товары</h1>
          <p className={styles.subtitle}>
            Управление товарами интернет-магазина
          </p>
        </div>

        <button className={styles.addBtn}>
          <i className="fa-solid fa-plus"></i>
          Добавить товар
        </button>
      </div>

      {/* TABLE */}
      <div className={styles.table}>
        {/* HEAD */}
        <div className={`${styles.row} ${styles.head}`}>
          <div>Фото</div>
          <div>Название</div>
          <div>Категория</div>
          <div>Цена</div>
          <div>Цвет</div>
          <div>Действия</div>
        </div>

        {/* ROW */}
        <div className={styles.row}>
          <div>
            <img
              className={styles.image}
              src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=200&q=60"
              alt="product"
            />
          </div>

          <div>Пижама шелковая, женская</div>
          <div>Пижамы</div>
          <div>$49.99</div>
          <div>Розовый</div>

          <div className={styles.actions}>
            <button className={styles.editBtn}>
              <i className="fa-solid fa-pen"></i>
            </button>

            <button className={styles.deleteBtn}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        {/* ROW 2 */}
        <div className={styles.row}>
          <div>
            <img
              className={styles.image}
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=200&q=60"
              alt="product"
            />
          </div>

          <div>Пижама хлопковая, мужская</div>
          <div>Пижамы</div>
          <div>$39.99</div>
          <div>Синий</div>

          <div className={styles.actions}>
            <button className={styles.editBtn}>
              <i className="fa-solid fa-pen"></i>
            </button>

            <button className={styles.deleteBtn}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
