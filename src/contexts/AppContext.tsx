import React, { useState, createContext } from "react";

type AppContextType = {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
  favorites: any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
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

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
