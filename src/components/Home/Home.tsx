import React, { useState, useRef } from "react";
import "./Home.css";
import RepoList from "../RepoList/RepoList";
import SearchInput from "../SearchInput/SearchInput";
import axios from "axios";
import { debounce } from "lodash";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setSearchValue(value);
    debounceFetchResults.current(value, currentPage);
  };

  const fetchResults = async (searchValue: string, page: number) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchValue}&page=${page}`,
      );
      console.log(response);
      setSearchResults(response.data.items);
      setTotalPages(Math.ceil(response.data.total_count / 30));
    } catch (error) {
      console.log(error);
    }
  };

  const debounceFetchResults = useRef(
    debounce(
      (value: string, page: number) => fetchResults(value, page),
      600,
    ),
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    debounceFetchResults.current(searchValue, page);
  };

  return (
    <div className="home__wrapper">
      <div className="search__result__wrapper">
        <SearchInput
          onChange={handleSearchChange}
          value={searchValue}
        />
        <h2>Résultats de la recherche</h2>
        <RepoList
          repos={searchResults}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
