import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import ListBeers from "./Pages/ListBeers";
import SingleBeer from "./Pages/SingleBeer";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Beers" component={ListBeers}/>
        <Route exact path="/Beers/:id" component={SingleBeer}/>
        <Route exact path="/new-beer"component={NewBeer}/>
        <Route exact path="/random-beer"component={RandomBeer}/>
      </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
