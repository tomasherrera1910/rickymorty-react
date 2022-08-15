import styles from "./spinner.module.css";
import { ImSpinner } from "react-icons/im";
export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner size={60} />
    </div>
  );
};
