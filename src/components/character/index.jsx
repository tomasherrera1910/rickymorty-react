import styles from "./Character.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Character = ({ character }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.textStyle} key={character.id}>
      <Link
        to={`/character/${character.id}`}
        onClick={() => navigate(`/character/${character.id}`)}
      >
        <img
          width={200}
          height={200}
          src={character.image}
          alt={character.name}
          className={styles.imageStyle}
        />
      </Link>
      <h1>{character.name}</h1>
    </li>
  );
};
