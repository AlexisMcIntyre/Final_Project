import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import PicturesPage from './Pages/PicturesPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import BlogsPage from './Pages/BlogsPage';
import RecipesPage from './Pages/RecipesPage';

//This App.js page contains all of my React router information which does all the processing when a link is clicked. The Route tells the switchboard which component the view should be switched to. The links themselves are inside of my NavBar component.

export default function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/blogs">
            <BlogsPage />
          </Route>
          <Route exact path="/pictures">
            <PicturesPage />
          </Route>
          <Route exact path="/recipes">
            <RecipesPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}