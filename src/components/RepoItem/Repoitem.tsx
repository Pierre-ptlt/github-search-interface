import React, { useContext } from "react";
import "./Repoitem.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star";
import AppContext from "../../contexts/AppContext";

interface RepoitemProps {
  repo: any;
}

const Repoitem: React.FC<RepoitemProps> = (props) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "Le composant doit être utilisé à l'intérieur du AppProvider",
    );
  }

  const { favorites, addFavorite, removeFavorite } = context;

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
              <Star />
            </div>
          ) : (
            <div className="favorite__wrapper">
              Ajouter aux favoris
              <StarBorderIcon />
            </div>
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Repoitem;
