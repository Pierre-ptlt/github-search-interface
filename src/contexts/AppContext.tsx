import { useState, createContext } from "react";
import { Repo, Favorite } from "../types";

interface IAppContextType {
  searchResults: Repo[];
  setSearchResults: React.Dispatch<React.SetStateAction<Repo[]>>;
  favorites: Favorite[];
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[]>>;
  addFavorite: (repo: Repo) => void;
  removeFavorite: (id: number) => void;
  setFavoriteRating: (repoId: number, rating: number) => void;
}

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<IAppContextType | undefined>(
  undefined,
);

export default AppContext;

export const AppProvider = ({ children }: IAppProviderProps) => {
  const [searchResults, setSearchResults] = useState<Repo[]>([]);
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
