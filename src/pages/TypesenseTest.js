import {
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
import { searchClient } from "../typesenseAdapter";
import Hits from "./typesense/Hits";

function TypesenseTest() {
  return (
    <div>
      <InstantSearch indexName="scripts" searchClient={searchClient}>
        <h4>Search </h4>
        <SearchBox />
        <RefinementList attribute="genres" />
        <Hits />
        <Pagination />
      </InstantSearch>
    </div>
  );
}

export default TypesenseTest;
