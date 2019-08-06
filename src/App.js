import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import AddScore from "./components/AddScore/AddScoreComponent";
import Scores from "./components/Scores/ScoresComponent";
import Handicap from "./components/Handicap/HandicapComponent";
import Stats from "./components/Stats/StatsComponent";
import AddScoreForm from "./components/AddScore/AddScoreForm";
import EditScore from "./components/Scores/EditScoreComponent";
import logo from "./photos/logo_small.png"


class App extends Component {
  render() {
    return (
      <Router>
        <style>{'body { background-color: #999D9F ; }'}</style>
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">YOLF</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/addscoreform">Add Score</Nav.Link>
            <Nav.Link as={Link} to="./scores">Scores</Nav.Link>
            <Nav.Link as={Link} to="./handicap">Handicap</Nav.Link>
            <Nav.Link as={Link} to="./stats">Stats</Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/addScore"  component={AddScore} />
        <Route path="/addscoreform" component={AddScoreForm}/>
        <Route path="/scores" component={Scores} />
        <Route path="/handicap" component={Handicap}/>
        <Route path="/stats" component={Stats}/>
        <Route path="/scores/edit/:id" component={EditScore} />
        <footer>© 2019 Copyright</footer>
      </Router>
    );
  }
}
export default App;
