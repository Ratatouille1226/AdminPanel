import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./AdminLayout.module.css";

export const AdminLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <Header />

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
