import React from "react";
import { TextField } from "@mui/material";
import "./searchInput.css";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <div>
      <TextField
        className="search__input"
        type="text"
        value={props.value}
        onChange={props.onChange}
        label="Rechercher un repo sur Github"
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default SearchInput;
