// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import MovieDetails from "./components/MovieDetails";
import SearchedResults from "./components/SearchedResults";

const App = () => {
  return (
    <Router>
      <div className="APP">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search/:query" element={<SearchedResults/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
