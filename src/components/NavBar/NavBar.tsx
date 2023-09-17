import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
      <AppBar className="app__bar" position="static">
        <Toolbar>
          <Typography
            style={{ marginLeft: "7%" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Github Search
          </Typography>
          <div>
            <Button
              size="small"
              color="inherit"
              component={Link}
              to="/"
            >
              Accueil
            </Button>
            <Button
              size="small"
              color="inherit"
              component={Link}
              to="/favoris"
            >
              Favoris
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
