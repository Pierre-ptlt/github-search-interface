import { useContext } from "react";
import "./RepoItem.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppContext from "../../contexts/AppContext";
import { Repo } from "../../types";
import StarRating from "../StarRating/StarRating";

interface RepoItemProps {
  repo: Repo;
  isFavoritePage: boolean;
}

const RepoItem = ({ repo, isFavoritePage }: RepoItemProps) => {
  const context = useContext(AppContext);
  const {
    name,
    owner,
    description,
    stargazers_count,
    visibility,
    language,
    html_url,
    id: repoId,
  } = repo;

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
    ({ id: favId }) => favId === repoId,
  );
  const currentRating = favoriteRepo ? favoriteRepo.rating : 0;

  const isFavorite = favorites.some(
    ({ id: favId }) => favId === repoId,
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(repoId);
    } else {
      addFavorite(repo);
    }
  };

  const handleSetFavoriteRating = (rating: number) => {
    setFavoriteRating(repoId, rating);
  };

  return (
    <Card className="repo-item">
      <CardContent className="repo-item__content">
        <Typography
          className="repo-item-title"
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Auteur: {owner.login}
        </Typography>
        <Typography
          className="repo-item__description"
          variant="body2"
        >
          {description}
        </Typography>
        <div className="item__details">
          <Typography variant="body2">
            Etoiles: {stargazers_count}
          </Typography>
          <Typography variant="body2">
            Visibilité: {visibility}
          </Typography>
          {language ? (
            <Typography variant="body2">
              Langage: {language}
            </Typography>
          ) : null}
        </div>
        <Button
          variant="contained"
          component="a"
          href={html_url}
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
        {isFavoritePage && (
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
