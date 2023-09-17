import React, { useState, createContext } from "react";
import { Favorite, Repo } from "../types";

interface IAppContext {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  favorites: any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
  addFavorite: (repo: any) => void;
  removeFavorite: (id: number) => void;
  setFavoriteRating: (repoId: number, rating: number) => void;
}

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: IAppProviderProps) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const addFavorite = (repo: Repo) => {
    const newFavorite = {
      ...repo,
      rating: 0,
    };
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id),
    );
  };

  const setFavoriteRating = (repoId: number, rating: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((favorite) => {
        if (favorite.id === repoId) {
          return { ...favorite, rating };
        }
        return favorite;
      }),
    );
  };

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        setFavoriteRating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
