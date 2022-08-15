import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Character } from "../character";
import styles from "./charactersList.module.css";
import { Spinner } from "../spinner";
import { getCharacter } from "../../utils/getCharacter";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query] = useSearchParams();
  const search = query.get("search");
  const pageSearch = query.get("page");
  useEffect(() => {
    try {
      // console.log(pageSearch);
      setLoading(true);
      const URLSearch = search
        ? `/character/?page=${pageSearch}&name=${search}`
        : `/character?page=${pageSearch}`;
      getCharacter(URLSearch).then((data) => setCharacters(data.results));
    } catch (error) {
      console.log("Error al traer la tabla de personajes :" + error);
    } finally {
      setLoading(false);
    }
  }, [search, pageSearch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      {characters ? (
        <ul className={styles.charactersGrid}>
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </ul>
      ) : (
        <section>
          <h1 className={styles.noResults}>No results</h1>
          <h3 className={styles.noResultsH3}>
            The character not found or this number page no exists
          </h3>
        </section>
      )}
    </div>
  );
};
