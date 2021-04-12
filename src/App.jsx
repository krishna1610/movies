import React from "react";
import "./App.css";
import MoviesList from "./Components/MoviesList";
import AppHeader from "./Components/AppHeader";
import TVShowsList from "./Components/TvShowsList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import AppFooter from "./Components/AppFooter";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import JoinTMDB from "./Components/JoinTMDB";

// / -> Home
// /movies -> MoviesList
// /tv-shows -> TvShowsList

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader />

        <Switch>
          <Route path="/movies/top-rated">
            <MoviesList title="Top Rated Movies" sortBy="vote_average.desc" />
          </Route>
          <Route path="/movies">
            <MoviesList title="Popular Movies" sortBy="popularity.desc" />
          </Route>
          <Route path="/tv-shows/top-rated">
            <TVShowsList
              title="Top Rated TV Shows"
              sortBy="vote_average.desc"
            />
          </Route>
          <Route path="/tv-shows">
            <TVShowsList title="Popular TV Shows" sortBy="popularity.desc" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/join-tmdb">
            <JoinTMDB />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <AppFooter />
      </BrowserRouter>
    );
  }
}

export default App;
