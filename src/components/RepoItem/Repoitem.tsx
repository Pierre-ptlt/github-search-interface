import React, { useEffect } from "react";
import "./Repoitem.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface RepoitemProps {
  repo: any;
}

const Repoitem: React.FC<RepoitemProps> = (props) => {
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
      </CardContent>
    </Card>
  );
};

export default Repoitem;
