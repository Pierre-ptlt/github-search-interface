import React from "react";
import "./RepoList.css";
import Repoitem from "../RepoItem/Repoitem";
import { Pagination } from "@mui/material";

interface RepoListProps {
  repos: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onAddToFavorites: (repo: any) => void;
}

const RepoList: React.FC<RepoListProps> = (props) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    props.onPageChange(page);
  };

  return (
    <div className="repo__list">
      <div className="repo__list__wrapper">
        {props.repos.map((repo) => (
          <Repoitem
            key={repo.id}
            repo={repo}
            onAddToFavorites={props.onAddToFavorites}
          />
        ))}
      </div>
      {props.repos.length > 0 ? (
        <div className="pagination__wrapper">
          <Pagination
            count={props.totalPages}
            page={props.currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      ) : null}
    </div>
  );
};

export default RepoList;
