import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../navbar";
import { Spinner } from "../spinner";
import { getCharacter } from "../../utils/getCharacter";
import { IoIosArrowRoundBack } from "react-icons/io";
import styles from "./CharacterDescription.module.css";
export const CharacterDescription = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let path = `/character/${id}`;
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      getCharacter(path).then((data) => setCharacter(data));
    } catch (error) {
      console.log("Se produjo un error al traer al personaje: " + error);
    } finally {
      setLoading(false);
    }
  }, [id, path]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className={styles.cardStyle}>
        <img
          className={styles.imageStyle}
          src={character.image}
          alt={character.name}
        />
        <h2>{character.name}</h2>
        <ul className={styles.list}>
          <li>
            <strong>Gender: </strong>
            {character.gender}
          </li>
          <li>
            <strong>Species: </strong>
            {character.species}
          </li>
          <li>
            <strong className={styles.strong}>Status: </strong>
            {character.status === "Alive" ? (
              <p className={styles.alive}>{character.status}</p>
            ) : character.status === "Dead" ? (
              <p className={styles.dead}>{character.status}</p>
            ) : (
              <p className={styles.unknown}>{character.status}</p>
            )}
          </li>
        </ul>
        <Link
          className={styles.link}
          onClick={() => navigate(-2)}
          to={() => navigate(-2)}
        >
          <IoIosArrowRoundBack size={50} />
        </Link>
      </div>
    </>
  );
};
