import React from "react";

interface FavoriteListProps {
  repos: any[];
}

const FavoriteList: React.FC<FavoriteListProps> = (props) => {
  return (
    <div>
      Favoris
      {props.repos}
    </div>
  );
};

export default FavoriteList;
