import "./App.css";
import FavoriteList from "./components/FavoriteList/FavoriteList";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoris" element={<FavoriteList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
