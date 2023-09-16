import React from "react";
import AppContext from "../../contexts/AppContext";
import RepoItem from "../RepoItem/Repoitem";

const FavoriteList: React.FC = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error(
      "Le composant doit être utilisé à l'intérieur du AppProvider",
    );
  }

  const { favorites, removeFavorite } = context;

  return (
    <div className="favorites__wrapper">
      <h2 className="favorites__title">Mes favoris</h2>
      {favorites.length === 0 ? (
        <p className="favorites__empty">Aucun favori</p>
      ) : (
        <div className="favorite__list">
          {favorites.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
