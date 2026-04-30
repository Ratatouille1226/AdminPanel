import styles from "./Settings.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  fetchStore,
  updateStore,
} from "../../features/settings-app/settingsSlise";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { StoreForm } from "../../types";

export const Settings = () => {
  const storeId = 1; // ЗАХАРДКОДИЛ ИД МАГАЗИНА ПОКА НЕТ АВТОРИЗАЦИИ В АДМИНКЕ

  const dispatch = useAppDispatch();
  const {
    data: store,
    loading,
    error,
  } = useAppSelector((state) => state.storeSettings);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StoreForm>();

  useEffect(() => {
    dispatch(fetchStore(storeId));
  }, []);

  // заполняем форму
  useEffect(() => {
    if (store) {
      reset({
        name: store.name || "",
        description: store.description || "",
        phone: store.phone || "",
        email: store.email || "",
        address: store.address || "",
      });
    }
  }, [store]);

  const onSubmit = (data: any) => {
    dispatch(updateStore({ ...store, ...data }));
  };

  console.log("store", store);

  if (loading || !store) return <p>Загрузка...</p>;

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Настройки магазина</h1>
          <p className={styles.subtitle}>Управление информацией о магазине</p>
        </div>

        <button className={styles.saveBtn} onClick={handleSubmit(onSubmit)}>
          <i className="fa-solid fa-floppy-disk"></i>
          Сохранить
        </button>
      </div>

      {/* FORM */}
      <form className={styles.card}>
        <div className={styles.row}>
          <label>Название магазина</label>
          <input
            {...register("name", {
              required: "Введите название магазина",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label>О нас</label>
          <textarea
            {...register("description", {
              required: "Введите описание",
            })}
          />
          {errors.description && (
            <span className={styles.error}>{errors.description.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label>Контакты</label>
          <input
            {...register("phone", {
              required: "Введите телефон",
            })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некорректный email",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.row}>
          <label>Адрес</label>
          <input
            {...register("address", {
              required: "Введите адрес",
            })}
          />
          {errors.address && (
            <span className={styles.error}>{errors.address.message}</span>
          )}
        </div>
      </form>
    </div>
  );
};
