import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
import RepoList from "../RepoList/RepoList";
import FavoriteList from "../FavoriteList/FavoriteList";
import SearchInput from "../SearchInput/SearchInput";
import axios from "axios";
import { debounce } from "@mui/material/utils";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setSearchValue(value);
    debounceFetchResults(value, currentPage);
  };

  const fetchResults = async (searchValue: string, page: number) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchValue}&page=${page}`,
      );

      setSearchResults(response.data.items);
      setTotalPages(Math.ceil(response.data.total_count / 30));
    } catch (error) {
      console.log(error);
    }
  };

  const debounceFetchResults = useCallback(
    debounce((query, page) => fetchResults(query, page), 1000),
    [fetchResults],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchResults(searchValue, page);
  };

  const handleAddToFavorites = (repo: any) => {
    console.log(repo);
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
          onAddToFavorites={handleAddToFavorites}
        />
      </div>
      <div className="favorites__wrapper">
        <FavoriteList repos={favorites} />
      </div>
    </div>
  );
};

export default Home;
