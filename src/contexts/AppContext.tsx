import { fabClasses } from "@mui/material";
import React, { useState, createContext } from "react";

type AppContextType = {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  favorites: any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
  addFavorite: (repo: any) => void;
  removeFavorite: (id: number) => void;
  setFavoriteRating: (repoId: number, rating: number) => void;
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(
  undefined,
);

export default AppContext;

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [favorites, setFavorites] = React.useState<any[]>([]);

  const addFavorite = (repo: any) => {
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
