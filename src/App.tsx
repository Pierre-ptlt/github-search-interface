import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import FavoriteList from "./components/FavoriteList/FavoriteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoris" element={<FavoriteList />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
