import LogoBlack from "../../assets/LogoBlack.png";
import styles from "./navbar.module.css";
import { useSearchParams, Link } from "react-router-dom";
export default function Navbar() {
  const [setQuery] = useSearchParams();
  return (
    <header className={styles.logoBox}>
      <Link onClick={() => setQuery({ page: 1 })} to="/">
        <img className={styles.logo} src={LogoBlack} alt="logo" />
      </Link>
    </header>
  );
}
