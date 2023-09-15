import React, { useEffect } from "react";

interface RepoitemProps {
  repo: any;
  onAddToFavorites: (repo: any) => void;
}

const Repoitem: React.FC<RepoitemProps> = (props) => {
  useEffect(() => {
    console.log(props.repo);
  }, [props]);

  return (
    <div className="repoItem__wrapper">
      <h3>{props.repo.name}</h3>
    </div>
  );
};

export default Repoitem;
