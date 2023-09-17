import React from "react";
import "./FavoriteList.css";
import AppContext from "../../contexts/AppContext";
import RepoItem from "../RepoItem/RepoItem";
const FavoriteList: React.FC = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error(
      "Le composant doit être utilisé à l'intérieur du AppProvider",
    );
  }

  const { favorites } = context;

  return (
    <div className="favorites__list">
      <h2 className="favorites__title">Mes favoris</h2>
      {favorites.length === 0 ? (
        <p className="favorites__empty">Aucun favori</p>
      ) : (
        <div className="favorite__list__wrapper">
          {favorites.map((repo) => (
            <RepoItem
              isFavoritePage={true}
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
