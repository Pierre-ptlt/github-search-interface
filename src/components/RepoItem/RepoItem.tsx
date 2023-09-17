import React, { useContext } from "react";
import "./RepoItem.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "../StarRating/StarRating";
import AppContext from "../../contexts/AppContext";

interface RepoitemProps {
  repo: any;
  isFavoritePage: boolean;
}

const RepoItem: React.FC<RepoitemProps> = (props) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "Le composant doit être utilisé à l'intérieur du AppProvider",
    );
  }

  const {
    favorites,
    addFavorite,
    removeFavorite,
    setFavoriteRating,
  } = context;

  const favoriteRepo = favorites.find(
    (fav) => fav.id === props.repo.id,
  );
  const currentRating = favoriteRepo ? favoriteRepo.rating : 0;

  const isFavorite = favorites.some(
    (fav) => fav.id === props.repo.id,
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(props.repo.id);
    } else {
      addFavorite(props.repo);
    }
  };

  const handleSetFavoriteRating = (rating: number) => {
    setFavoriteRating(props.repo.id, rating);
  };

  return (
    <Card className="repo-item">
      <CardContent className="repo-item__content">
        <Typography
          className="repo-item-title"
          variant="h5"
          component="div"
        >
          {props.repo.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Auteur: {props.repo.owner.login}
        </Typography>
        <Typography
          className="repo-item__description"
          variant="body2"
        >
          {props.repo.description}
        </Typography>
        <div className="item__details">
          <Typography variant="body2">
            Etoiles: {props.repo.stargazers_count}
          </Typography>
          <Typography variant="body2">
            Visibilité: {props.repo.visibility}
          </Typography>
          {props.repo.language ? (
            <Typography variant="body2">
              Langage: {props.repo.language}
            </Typography>
          ) : null}
        </div>
        <Button
          variant="contained"
          component="a"
          href={props.repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </Button>
        <IconButton
          className="icon__button"
          onClick={handleToggleFavorite}
          color="primary"
        >
          {isFavorite ? (
            <div className="favorite__wrapper">
              Retirer des favoris
              <FavoriteIcon />
            </div>
          ) : (
            <div className="favorite__wrapper">
              Ajouter aux favoris
              <FavoriteBorderIcon />
            </div>
          )}
        </IconButton>
        {props.isFavoritePage && (
          <div>
            <div className="my__rating">
              <Typography variant="body2">Ma note: </Typography>
              <StarRating
                currentRating={currentRating}
                onRate={handleSetFavoriteRating}
              />
            </div>
            <Typography variant="body2">
              Note: {currentRating}/5
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RepoItem;
