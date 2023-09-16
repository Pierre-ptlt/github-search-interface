import React, { useContext } from "react";
import "./RepoList.css";
import AppContext from "../../contexts/AppContext";
import Repoitem from "../RepoItem/Repoitem";
import { Pagination } from "@mui/material";

interface RepoListProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const RepoList: React.FC<RepoListProps> = (props) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "RepoList doit être utilisé à l'intérieur du AppProvider",
    );
  }

  const repos = context.searchResults;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    props.onPageChange(page);
  };

  return (
    <div className="repo__list">
      <div className="repo__list__wrapper">
        {repos.map((repo) => (
          <Repoitem key={repo.id} repo={repo} />
        ))}
      </div>
      {repos.length > 0 ? (
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
