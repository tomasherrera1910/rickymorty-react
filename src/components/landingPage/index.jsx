import { useState } from "react";
import { CharactersList } from "../charactersList";
import Navbar from "../navbar";
import { Pagination } from "../pagination";
import { Search } from "../search";
import { useSearchParams } from "react-router-dom";

export function LandingPage() {
  const [query] = useSearchParams();
  const pageFromParams = query.get("page");
  const [page, setPage] = useState(parseInt(pageFromParams));
  return (
    <>
      <Navbar />
      <Pagination page={page} setPage={setPage} />
      <Search setPage={setPage} />
      <CharactersList />
    </>
  );
}
