import styles from "./notFound.module.css";
import Navbar from "../navbar";
export const NotFound = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.h1}>404</h1>
      <h3 className={styles.h3}>Error url no encontrada</h3>
    </div>
  );
};
