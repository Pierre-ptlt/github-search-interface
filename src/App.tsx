import "./App.css";
import FavoriteList from "./components/FavoriteList/FavoriteList";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { AppProvider } from "./contexts/AppContext";

const App: React.FC = () => {
  return (
    <div>
      <AppProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favoris" element={<FavoriteList />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
