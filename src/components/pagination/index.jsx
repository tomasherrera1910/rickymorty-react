import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacter } from "../../utils/getCharacter";
import styles from "./pagination.module.css";
export const Pagination = ({ page, setPage }) => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const pageFromParams = query.get("page");
  const [totalPages, setTotalPages] = useState(null);
  const [path, setPath] = useState("");

  const handleBackClick = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    !page && setPage(1);
    console.log("page fromparams: " + pageFromParams);
    console.log("page from state : " + page);
    if (search) {
      setQuery({ search: search, page: page });
    } else {
      setQuery({ page: page });
    }
  }, [page, search, setQuery, query, pageFromParams, setPage]);

  useEffect(() => {
    setPath(search ? `/character/?name=${search}` : `/character/?page=${page}`);
    getCharacter(path)
      .then((data) => setTotalPages(data.info?.pages))
      .catch((error) => {
        console.error("Error:" + error);
      });
  }, [path, search, page]);

  return (
    <div className={styles.buttonContainer}>
      {page <= 1 ? (
        <p></p>
      ) : (
        <button className={styles.button} onClick={handleBackClick}>
          BACK
        </button>
      )}
      PAGE {page} of {totalPages}
      {page >= totalPages ? (
        <p></p>
      ) : (
        <button className={styles.button} onClick={handleNextClick}>
          NEXT
        </button>
      )}
    </div>
  );
};
